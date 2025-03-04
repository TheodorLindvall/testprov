// 3. Buttons (3p)
// Skapa två komponenter: Button och ButtonWithChildren.
// Button ska ha en prop `title` som anger rubriken på knappen.
// ButtonWithChildren ska använda children för att visa texten i knappen.
// Båda komponenter ska ha en prop `onClick` som kallas när man klickar på knappen.
// Använd båda komponenterna på sidan. När man klickar på Button-knappen ska
// det skrivas ut "klick på Button" på sidan.
// När man klickar på ButtonWithChildren-knappen
// ska det skrivas ut "klick på ButtonWithChildren".

import React, { useState } from "react";
import Button from "./Button";
import ButtonWithChildren from "./ButtonWithChildren";

const App = () => {
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    setMessage("Klick på Button");
  };

  const handleButtonWithChildrenClick = () => {
    setMessage("Klick på ButtonWithChildren");
  };

  return (
    <div>
      <Button title="Button" onClick={handleButtonClick} />
      <ButtonWithChildren onClick={handleButtonWithChildrenClick}>
        ButtonWithChildren
      </ButtonWithChildren>
      <p>{message}</p>
    </div>
  );
};

export default App;

