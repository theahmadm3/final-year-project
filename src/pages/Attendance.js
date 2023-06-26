import 'tachyons';
import SideNavbar from '../components/SideNavbar'
import Biometrics from 'No/components/biometrics/Biometrics';
import Footer from '../components/Footer';
import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import { getCoords } from '../utils';
// import getDistance from 'geolib/es/getDistance';

function getDistance(coord1, coord2) {
  // Convert degrees to radians
  const lat1Rad = toRadians(coord1.latitude);
  const lon1Rad = toRadians(coord1.longitude);
  const lat2Rad = toRadians(coord2.latitude);
  const lon2Rad = toRadians(coord2.longitude);

  // Radius of the Earth in kilometers
  const radius = 6371;

  // Haversine formula
  const dlat = lat2Rad - lat1Rad;
  const dlon = lon2Rad - lon1Rad;
  const a =
    Math.sin(dlat / 2) * Math.sin(dlat / 2) +
    Math.cos(lat1Rad) *
      Math.cos(lat2Rad) *
      Math.sin(dlon / 2) *
      Math.sin(dlon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = (radius * c) / 1000;

  return distance;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

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
      // alert(getDistance(studCoords, instructorCoords));
      if (
        getDistance(studCoords, instructorCoords) > 20000 ||
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

    // const callapi = async ()=>{
    //   const res = await fetch('/api/hello')
    //   console.log(await res.json())
    // }
    // callapi()

    if(status == 'SUCCESS'){
      alert("Attendance Successful");
    } else if(status == 'FAILED'){
      alert("Attendance Failure");
    }

    return (
      <>
        
        <SideNavbar />
        {/* <Biometrics /> */}
        {!scanQR ? (
          <div className="center pa4 ma2 bn shadow-1">
            <button className="center br3 pa2 ma2"
            onClick={async () => {
              setScanQR(true);
            }}>
            Take Attendance
          </button>
          </div>
        ) : (
          <>
            <QrReader
              scanDelay={500}
              constraints={{ facingMode: 'environment' }}
              onResult={(result, error) => {
                if (!!result) {
                  setScanQR(false)
                  setData(result);
                  const data = JSON.parse(result.text);
                  takeAttendance(data);
                }

                if (!!error) {
                  // alert(JSON.stringify(error));
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
