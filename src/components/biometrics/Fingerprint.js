import Image from "next/image";
import fingerprint from "No/Images/fingerprint.png"

function Fingerprint() {
    return (
        <h3 className="fit-content center pointer grow">
            <Image src={fingerprint} width={150} />
        </h3>
    );
}

export default Fingerprint;