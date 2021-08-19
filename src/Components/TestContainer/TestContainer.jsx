import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallangeContainer from "../TypingChallangeContainer/TypingChallangeContainer";
import "./TestContainer.css";

const TestContainer = ({
  selectedParagraph,
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
    <div className="test-container">

      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className="typing-challange-container">

          <TypingChallangeContainer
            selectedParagraph={selectedParagraph}
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            words={words}
            characters={characters}
            wpm={wpm}
            testInfo={testInfo}
            onInputChange={onInputChange}
          />

        </div>
      ) : (
        <div className="try-again-container">
          <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain} />
        </div>
      )}
      
    </div>
  );
};

export default TestContainer;
