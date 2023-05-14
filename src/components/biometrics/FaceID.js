import Image from "next/image";
import faceid from "../../Images/faceid.png";

function FaceID() {
    return ( 
        <h3 className="fit-content center pointer grow">
            <Image src={faceid} width={90} />
        </h3>
    );
}

export default FaceID;