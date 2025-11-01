function AudioPlayer() {
    const [audio] = React.useState(new Audio());
    const [isPlaying, setIsPlaying] = React.useState(false);

    const playAudio = () => {
        audio.play();
        setIsPlaying(true);
    };

    const pauseAudio = () => {
        audio.pause();
        setIsPlaying(false);
    };

    const stopAudio = () => {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
    };

    React.useEffect(() => {
        // Cleanup the audio element on component unmount
        return () => {
            audio.pause();
            audio.src = "";
        };
    }, [audio]);

    return (
        <div>
            <button onClick={playAudio} disabled={isPlaying}>Play</button>
            <button onClick={pauseAudio} disabled={!isPlaying}>Pause</button>
            <button onClick={stopAudio}>Stop</button>
        </div>
    );
}

export default AudioPlayer;