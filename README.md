# WebSocket Client Application

This project is a React application that connects to a WebSocket server to receive messages and play audio files. It also displays the user's current geographical location.

## Features

- Connects to a WebSocket server.
- Plays .mp3 audio files upon successful connection.
- Displays the user's current latitude and longitude.

## Project Structure

```
websocket-client
├── src
│   ├── components
│   │   ├── AudioPlayer.tsx
│   │   └── LocationDisplay.tsx
│   ├── hooks
│   │   └── useWebSocket.ts
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd websocket-client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the development server, run:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

Upon connecting to the WebSocket server, the application will automatically start playing the audio files and display the user's current location.

## License

This project is licensed under the MIT License.