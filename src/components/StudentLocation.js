function StudentLocation() {
    const getCoordinates = () => {
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
    return (
        <button onClick={getCoordinates} className="grow bn pa2 shadow-1 mt1">
            Verify Location
        </button>
    );
}




export default StudentLocation;
