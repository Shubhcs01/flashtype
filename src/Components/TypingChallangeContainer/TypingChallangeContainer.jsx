import React from "react";
import ChallangeDetailsCard from "../ChallangeDetailsCard/ChallangeDetailsCard";
import TypingChallange from "../TypingChallange/TypingChallange";
import "./TypingChallangeContainer.css";

const TypingChallangeContainer = ({
  words,
  wpm,
  characters,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
  startAgain,
}) => {
  return (
    <div className="typing-challange-container">
      {/* Details section */}
      <div className="details-container">
        {/* words typed */}
        <ChallangeDetailsCard cardName="Words" cardValue={words} />

        {/* characters typed */}
        <ChallangeDetailsCard cardName="Characters" cardValue={characters} />

        {/* speed */}
        <ChallangeDetailsCard cardName="Speed" cardValue={wpm} />
      </div>

      {/* Real challange */}
      <div className="typewriter-container">
        <TypingChallange 
          selectedParagraph="Hello World!"
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          testInfo={testInfo}
          onInputChange={onInputChange}
          startAgain={startAgain}
        />
      </div>
    </div>
  );
};

export default TypingChallangeContainer;
