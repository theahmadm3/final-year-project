import "tachyons";
import QRCode from 'qrcode.react';

function Instructor() {
    const qrCodeValue = "h1";
    const qrCodeValue2 = "h2";
    const qrCodeValue3 = "h3";
    const qrCodeValue4 = "h4";
    const qrCodeValue5 = "h5";
    return (
        <>
            <div className="pa2 center w-100 mt1 shadow-1 bg-transparent">
                <header className="pa2 flex center flex-row">
                    <h2 className="w-80 white tc center"> Welcome To Your Profile </h2>
                </header>
                <section className="flex flex-row pl2">
                    <div className="w-60 center">
                        <div className="pa2 shadow-1 grow ma2 bg-white">
                            Instructor Name: <br />
                            <br />
                            Joe Schmoe
                        </div>
                        <div className="pa2 shadow-2 grow ma2 bg-white">
                            ID: <br />
                            <br />
                            9119189110
                        </div>
                    </div>
                </section>
                <section className="shadow-1 pa2 mt4">
                    <h1 className="tc white"> Courses </h1>
                    <div className="scroll-x w-100 center scroll-y Icourse fit-content pa2 shadow-1 ma3 flex flex-row">
                    <div className="pa3 ma2 bg-light-gray fit-content bn bg-white-70 flex flex-column shadow-1">
                        <QRCode value={qrCodeValue} className="center" />
                        <h2>
                            CSC 101
                        </h2>
                        <p>
                            Intro to computer science
                        </p>
                        <button disabled className="grow pa2 shadow-1 mt1"> Course materials </button>
                    </div>
                    </div>
                </section>
            </div>
        </>
    );
}



export default Instructor;
