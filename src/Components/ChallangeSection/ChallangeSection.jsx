import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallangeSection.css";

const ChallangeSection = ({
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
    <div className="challange-section-container">
      <h1 data-aos="fade-down" className="challange-section-header">
        Take a speed test now!
      </h1>
      
      <TestContainer
        selectedParagraph={selectedParagraph}
        timeRemaining={timeRemaining}
        timerStarted={timerStarted}
        words={words}
        characters={characters}
        wpm={wpm}
        testInfo={testInfo}
        onInputChange={onInputChange}
        startAgain={startAgain}
      />
    </div>
  );
};

export default ChallangeSection;
