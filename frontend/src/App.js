import { useState, useEffect } from "react";
import "./App.css";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logo from "./logo.png";
import logoJunia from "./logo-junia.png";
import animation from "./animation.gif";

import Moove from "./Moove";

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

  return (
    <div className="App">
      <header className="App-header">
        <div className="status">Status: {connectionStatus}</div>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <img
            src={logoJunia}
            alt="Logo-Junia"
            className="logo"
            style={{ paddingTop: "3rem" }}
          />
        </div>

        {shouldDisplayMoove && (
          <img src={animation} alt="loading..." className="Animation" />
        )}
        <Moove lastMessage={lastMessage} />
      </header>
    </div>
  );
}

export default App;
