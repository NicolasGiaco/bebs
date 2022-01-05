import { useState, useEffect } from "react";
import "./App.css";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logo from "./logo.png";
import Base from "./Base";
import Moove from "./Moove";

const delay = 5;

function App() {
  const [shouldDisplayMoove, setDisplayMoove] = useState(false);

  const { lastMessage, readyState } = useWebSocket("ws://127.0.0.1:8081", {
    share: true,
    shouldReconnect: (closeEvent) => true,
    onMessage: () => {
      setDisplayMoove(true);
    },
  });

  const connectionStatus = {
    [ReadyState.CONNECTING]: "connexion...",
    [ReadyState.OPEN]: "ok",
    [ReadyState.CLOSING]: "fermeture",
    [ReadyState.CLOSED]: "fermé",
    [ReadyState.UNINSTANTIATED]: "uninstantiated",
  }[readyState];

  useEffect(() => {
    let timer1 = setTimeout(() => setDisplayMoove(false), delay * 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, [shouldDisplayMoove]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
        {shouldDisplayMoove ? (
          <Moove lastMessage={lastMessage} />
        ) : (
          <Base connectionStatus={connectionStatus} lastMessage={lastMessage} />
        )}
      </header>
    </div>
  );
}

export default App;
