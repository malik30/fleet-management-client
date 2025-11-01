import React from 'react';
import useWebSocket from './hooks/useWebSocket';
import getCurrentLocation from './utils/getCurrentLocation';
import LocationDisplay from './components/LocationDisplay';
import AudioPlayer from './components/AudioPlayer';
function App() {
    const [location, setLocation] = React.useState({ latitude: null, longitude: null });
    const [audioFiles, setAudioFiles] = React.useState([]);
    const { connect, sendMessage, messages } = useWebSocket('ws://192.168.1.119:3010');

    React.useEffect(() => {
        connect();

        const fetchLocation = async () => {
            try {
                const currentLocation = await getCurrentLocation();
                setLocation(currentLocation);
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };

        fetchLocation();

        const intervalId = setInterval(() => {
            fetchLocation();
        }, 60000); // Fetch location every minute

        return () => clearInterval(intervalId);
    }, [connect]);

    React.useEffect(() => {
        if (messages.length > 0) {
            const newAudioFiles = messages.filter(msg => msg.type === 'audio');
            setAudioFiles(newAudioFiles);
        }
    }, [messages]);

    return (
        <div>
            <h1>WebSocket Client</h1>
            <LocationDisplay latitude={location.latitude} longitude={location.longitude} />
            <AudioPlayer audioFiles={audioFiles} />
        </div>
    );
}

export default App;