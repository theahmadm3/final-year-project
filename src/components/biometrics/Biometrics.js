import 'tachyons';
import FaceID from './FaceID';
import Fingerprint from './Fingerprint';


function Biometrics() {
    return (
        <div className='flex flex-column white bio pa3 tc centered shadow-1 w-40'>
            <h3>Verify Your biometrics</h3>
            <div>
                <FaceID />
            </div>
            <h1>OR</h1>
            <div>
                <Fingerprint />
            </div>
        </div>
    );
}

export default Biometrics;