function LocationDisplay() {
    const [location, setLocation] = React.useState<{ latitude: number; longitude: number } | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        getCurrentLocation()
            .then((pos) => {
                setLocation(pos);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {location ? (
                <p>
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                </p>
            ) : (
                <p>Loading location...</p>
            )}
        </div>
    );
}

export default LocationDisplay;