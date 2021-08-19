import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallangeSection from "../ChallangeSection/ChallangeSection";
import {SAMPLE_PARAGRAPHS} from "./../../data/sampleParagraphs"

const TotalTime = 60;
const ApiUrl = "http://metaphorpsum.com/paragraphs/1/4";
const DefaultState = {
  selectedParagraph: "Hello world",
  words: 0,
  characters: 0,
  wpm: 0,
  timerStarted: false,
  timeRemaining: TotalTime,
  testInfo: [],
};

class App extends React.Component {

  state = DefaultState;

  fetchNewParagraphFallback = () => {
    const data = SAMPLE_PARAGRAPHS[
      Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
    ]

    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "not attempted",
      };
    });

    this.setState({ 
      ...DefaultState,
       testInfo, 
       selectedParagraph: data 
      });
  }

  fetchNewParagraph = () => {
    fetch(ApiUrl)
      .then((response) => response.text())
      .then((data) => {

        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "not attempted",
          };
        });

        this.setState({ 
          ...DefaultState,
           testInfo, 
           selectedParagraph: data 
          });
      });
  };

  componentDidMount() {
    this.fetchNewParagraphFallback()
  }

  startAgain = () => {
    this.fetchNewParagraphFallback()
  };

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        // change the WPM
        const timeSpent = TotalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;
        // Update our State object
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) {
      this.startTimer();
    }

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      // underflow case
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "not attempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });

      return;
    }

    //overflow case
    if (index > this.state.selectedParagraph.length - 1) {
      this.setState({ characters, words });
      return;
    }

    //write a copy of testInfo
    const testInfo = this.state.testInfo;
    if (!(index == this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = "not attempted";

    //check for correct typed letter
    const isCorrect = inputValue[index] == testInfo[index].testLetter;

    //update testInfo
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    //update the set state
    this.setState({
      words,
      characters,
      testInfo,
    });
  };

  render() {
    return (
      <div className="app">
        {/*nav*/}
        <Nav />

        {/*landing page*/}
        <Landing />

        {/*challenge section*/}
        <ChallangeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          wpm={this.state.wpm}
          characters={this.state.characters}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />

        {/*footer*/}
        <Footer />
      </div>
    );
  }
}

export default App;
