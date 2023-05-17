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
            } else {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                alert(`${position.coords.latitude} ${position.coords.longitude}`);
            }
        });
    };

    return (
        <>
            <div className="pa2 center w-100 mt1 shadow-1 bg-transparent">
                <section className="shadow-1 pa2 mt4">
                    <h1 className="tc white"> Courses </h1>
                    <div className="scroll-x w-100 center scroll-y Icourse fit-content pa2 shadow-1 ma3 flex flex-row">
                        <div className="pa3 ma2 bg-light-gray fit-content bn bg-white-70 flex flex-column shadow-1">
                            <QRCode value={qrCodeValue} className="center" />
                            <h2>CSC 101</h2>
                            <p>Intro to computer science</p>
                            <button onClick={handleLocationClick} className="grow pa2 shadow-1 mt1">
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
