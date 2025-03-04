// 1. Popup (3p)
//
// Skapa en knapp "visa" på sidan. När man klickar på knappen ska en popup visas.
// Popup:en visar rubriken "En popup" och en stängknapp i en ruta.
// När man klickar på stängknappen ska popupen tas bort.


import React, { useState } from "react";

export default function Question1() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <h1>Question 1</h1>
      <button onClick={handleOpenPopup}>Visa</button>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            border: "1px solid black",
            padding: "20px",
            zIndex: 1000,
          }}
        >
          <h2>En popup</h2>
          <button onClick={handleClosePopup}>Stäng</button>
        </div>
      )}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={handleClosePopup}
        ></div>
      )}
    </div>
  );
}

  