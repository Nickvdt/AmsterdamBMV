import React, { useState } from "react";
import "./Button.css";

const Button = ({ onSelectButtonClick }) => {
  const handleButtonClick = (onderwerp) => {
    onSelectButtonClick(onderwerp);
  };

  return (
    <section className="buttons">
      <button type="button" onClick={() => handleButtonClick("Vastgoed")} className="button">
        Vastgoed
      </button>
      <button type="button" onClick={() => handleButtonClick("Werkwijze")} className="button">
        Werkwijze
      </button>
      <button type="button" onClick={() => handleButtonClick("BMV-Teams")} className="button">
        BMV-Teams
      </button>
    </section>
  );
};

export default Button;
