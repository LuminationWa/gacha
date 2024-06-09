"use client";
import { useEffect, useState } from "react";

const Gacha = () => {
  const questions = [
    "Do you have the savings to afford this character?",
    "Do you like this character a lot?",
    "Would you get this character even if they were bad?",
    "Is this the character you want the most?",
    "Have you thought long enough about this decision?",
  ];

  const [currentText, setCurrentText] = useState("Hullo");
  const [currentCount, setCurrentCount] = useState(0);
  const [blink, setBlinking] = useState(false);
  const [isButtonEnabled, setButtonEnabled] = useState(false);

  const triggerBlink = () => {
    setBlinking(true);
    setTimeout(() => {
      setBlinking(false);
    }, 1000);
  };

  const handleAction = (action) => {
    if (isButtonEnabled) {
      if (action) {
        setCurrentCount((prevCount) => (prevCount + 1) % questions.length);
      } else {
        setCurrentCount(0);
        triggerBlink();
      }
      setButtonEnabled(false);
    }
  };

  useEffect(() => {
    setCurrentText(questions[currentCount]);
    setButtonEnabled(false); // Disable buttons
    setTimeout(() => {
      setButtonEnabled(true); // Enable buttons after 1 second
    }, 1000);
  }, [currentCount]);

  return (
    <div className={`${blink ? "blink" : ""}`}>
      <p>{currentText}</p>
      <div>
        <div>
            <button
              className={`${"fillEffect-red fillEffect"} ${!isButtonEnabled ? "disabled" : ""} bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded`}
              onClick={() => handleAction(false)}
              disabled={!isButtonEnabled} // Disable button if not enabled
            >
              No
            </button>
        </div>
        <button
          className={`${"fillEffect-blue fillEffect"} ${!isButtonEnabled ? "disabled" : ""} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          onClick={() => handleAction(true)}
          disabled={!isButtonEnabled} // Disable button if not enabled
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default Gacha;

