import "./App.css";

function Moove({ lastMessage }) {
  const messageValue = lastMessage?.data?.replace(/["\\r]/g, "");
  const totalWattOfDay = (parseFloat(messageValue) * 3.9).toFixed(1);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "1.5cm",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {lastMessage ? (
          <div>
            <span>
              Vous êtes la
              <span style={{ fontWeight: "bold", color: "green" }}>
                {" "}
                {lastMessage.data.replace(/["\\r]/g, "")}ème{" "}
              </span>
              personne de la journée <br />
              et vous vennez de générer{" "}
              <span style={{ fontWeight: "bold", color: "green" }}>
                3.9 Watts
              </span>
            </span>
            <br />
            <br />
            Total aujourd'hui :{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              {totalWattOfDay} Watts
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              Merci !
            </span>
          </div>
        ) : (
          <span>Personne n'est encore passé aujourd'hui</span>
        )}
      </div>
    </div>
  );
}

export default Moove;
