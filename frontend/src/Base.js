import "./App.css";

function Base({ connectionStatus, lastMessage }) {
  return (
    <div>
      <span>
        Etat de la connection:{" "}
        <span
          style={{
            color:
              connectionStatus === "ok"
                ? "blue"
                : connectionStatus === "fermé"
                ? "red"
                : "white",
          }}
        >
          {connectionStatus}
        </span>
        {connectionStatus === "connexion..." && `, veuillez patienter`}
        {connectionStatus === "fermé" &&
          `, vérifiez la carte Arduino ou le server`}
        {connectionStatus === "ok" && ` !`}
        <br />
      </span>
      {lastMessage ? (
        <span>
          Nombre de personne aujourd'hui:{" "}
          {lastMessage.data.replace(/["\\r]/g, "")}
        </span>
      ) : null}
    </div>
  );
}

export default Base;
