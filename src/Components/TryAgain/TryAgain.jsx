import React from 'react';
import './TryAgain.css';

const TryAgain = ({ words, characters, wpm, startAgain}) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>

            <div className="result-container">
                <p>
                    <b>Characters</b> {characters}
                </p>
                <p>
                    <b>Words:</b> {words}
                </p>
                <p>
                    <b>Speed:</b> {wpm} wpm
                </p>
            </div>

            <div>
                <button onClick={()=>startAgain()} className="end-btn start-again-btn">Re-try</button>
                <button className="end-btn fb-share-btn" onClick={()=>{
                    window.open(
                        "https://www.facebook.com/sharer/sharer.php?u=example.org",
                        "facebook-share-dialog",
                        "width=800,height=600")
                }}>
                    Facebook
                </button>
                <button className="end-btn twitter-share-btn" onClick={()=>{
                    window.open(
                        "https://twitter.com/intent/tweet?text=Hello%20world",
                        "twitter-share-dialog",
                        "width=800,height=600")
                }}>
                    Twitter
                </button>
            </div>

        </div>
    )
}

export default TryAgain;