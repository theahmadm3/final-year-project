import 'tachyons';
import SideNavbar from '../components/SideNavbar'
import Biometrics from 'No/components/biometrics/Biometrics';
import Footer from 'No/components/Footer';
import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import { getCoords } from '../utils';
import getPreciseDistance from 'geolib/es/getPreciseDistance';

function Attendance() {

    const [data, setData] = useState(null);
    const [coords, setCoords] = useState(null);
    const [scanQR, setScanQR] = useState(false);
    const [status, setStatus] = useState('')

    const biometricsVerified = () => {
      return confirm("are you authorized?")
    }

    const takeAttendance = async (data)=>{
      const studCoords = await getCoords()
      const instructorCoords = data.coords
      if(data.expireOn < Date.now()){
        return alert("attendance has expired!!")
      }
      alert(getPreciseDistance(studCoords, instructorCoords, 1000 ));
      if (
        // getPreciseDistance(studCoords, instructorCoords, 1000) > 20 ||
        !biometricsVerified()
      ) {
        setStatus('FAILED');
        return;
      }
      await fetch('/api/attendance', {
        method: 'POST',
        body: JSON.stringify({
          ...data,
          student: JSON.parse(localStorage.getItem('user')),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setStatus('SUCCESS')
    }

    const callapi = async ()=>{
      const res = await fetch('/api/hello')
      console.log(await res.json())
    }
    callapi()

    if(status == 'SUCCESS'){
      return <p>success</p>
    } else if(status == 'FAILED'){
      return <p>failed</p>
    }

    return (
      <>
        <SideNavbar />
        {/* <Biometrics /> */}
        {!scanQR ? (
          <button
            onClick={async () => {
              setScanQR(true);
            }}>
            take attendance
          </button>
        ) : (
          <>
            <QrReader
              scanDelay={300}
              constraints={{ facingMode: 'environment' }}
              onResult={(result, error) => {
                setScanQR(false)
                if (!!result) {
                  setData(result);
                  const data = JSON.parse(result.text);
                  takeAttendance(data);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
              style={{ width: '100%' }}
            />
          </>
        )}
        <Footer />
      </>
    );
    
}

export default Attendance;