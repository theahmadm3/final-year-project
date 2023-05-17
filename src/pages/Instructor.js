import "tachyons";
import React, { useState } from 'react';
import geolocation from 'geolocation';
import QRCode from 'qrcode.react';


function Instructor() {
    const qrCodeValue = 'h1';
    const [location, setLocation] = useState(null);
    const handleLocationClick = () => {
        geolocation.getCurrentPosition((error, position) => {
            if (error) {
                console.error('Error getting location:', error);
                alert("Error: Can't get location!");
            } else {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                alert(`The coordinates are ${position.coords.latitude} ${position.coords.longitude}`);
            }
        });
    };
    const instructorFName = "Yoro";
    const instructorLName = "Diouf";
    const instructorID = 11008999;

    return (
        <>
            <div className="pa2 center w-100 mt1 shadow-1 bg-transparent">
                <h1 className="white"> Instructor Page </h1>
                <section className="w-100 pa1">
                    <div className="pa5 w-40 ma2 fr bg-white-90 grow">
                    </div>
                    <div className="bg-white-90 grow pa2 w-50 ma2">
                        <h3>Instructor Name:</h3>
                        <p>{instructorFName} {instructorLName}</p>
                    </div>
                    <div className="ma2 bg-white-90 grow pa2 w-50">
                        <h3>Instructor ID:</h3>
                        <p>{instructorID}</p>
                    </div>
                </section>
                <section className="shadow-1 pa2 mt4 w-100">
                    <h1 className="tc white"> Courses </h1>
                    <div className="scroll-x w-100 center scroll-y Icourse fit-content pa2 shadow-1 ma3 flex flex-row">
                        <div className="pa3 ma2 bg-light-gray fit-content bn bg-white-70 flex flex-column shadow-1">
                            <QRCode value={qrCodeValue} className="center grow" />
                            <h2>CSC 101</h2>
                            <p>Intro to computer science</p>
                            <button onClick={handleLocationClick} className="grow bn pa2 shadow-1 mt1">
                                Get Location
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}




export default Instructor;
