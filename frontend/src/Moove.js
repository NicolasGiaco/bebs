import "./App.css";
import animation from "./animation.gif";

function Moove({ lastMessage }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={animation} alt="loading..." className="Animation" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span>
          Vous êtes la
          {lastMessage ? (
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {lastMessage.data.replace(/["\\r]/g, "")}ème{" "}
            </span>
          ) : null}
          personne de la journée <br />
          et vous vennez de générer 500 joules
        </span>
        <span
          style={{ paddingTop: "2rem", fontSize: "2rem", fontWeight: "bold" }}
        >
          Merci !
        </span>
      </div>
    </div>
  );
}

export default Moove;
