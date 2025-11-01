import React from 'react';

function useWebSocket(url: string) {
    const [socket, setSocket] = React.useState<WebSocket | null>(null);
    const [messages, setMessages] = React.useState<string[]>([]);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const ws = new WebSocket(url);

        ws.onopen = () => {
            console.log("WebSocket connection established");
        };

        ws.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        ws.onerror = (event) => {
            setError("WebSocket error: " + event);
        };

        ws.onclose = () => {
            console.log("WebSocket connection closed");
        };

        setSocket(ws);

        return () => {
            ws.close();
        };
    }, [url]);

    const sendMessage = (message: string) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(message);
        } else {
            setError("WebSocket is not open. Unable to send message.");
        }
    };

    return { messages, error, sendMessage };
}

export default useWebSocket;