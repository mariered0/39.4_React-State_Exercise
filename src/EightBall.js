import React from 'react';
import { useState } from "react";
import App from './App';
import './EightBall.css';

const messages = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
    { msg: "Think of a Question", color: "black"}
  ]

const EightBall = (props) => {
    //Get randomIdx to choose a random message
    const randomIdx = () => Math.floor(Math.random() * 19);

    const restart = () => {
        chooseMsg(20);
    }


    const showAnswer = () => {
        chooseMsg([randomIdx()]);
    }

    const [idx, chooseMsg] = useState(20);

    return (
        <div className="EightBall">
            <h1 className="EightBall-title">Eight Ball</h1>
            <div className="EightBall-ball" style={{backgroundColor: messages[`${idx}`].color}} onClick={showAnswer}>
                <div className="EightBall-message">
                <p>{messages[`${idx}`].msg}</p>
                </div>
            </div>

            <button className="EightBall-button" onClick={restart}>New Game</button>

        </div>
    )
}

export default EightBall;
