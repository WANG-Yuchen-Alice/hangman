import React, { Component } from "react";
import { randomWord } from "./RandomWord";
import { randomName } from "./HogwartsNames";
import "./Hangman.css";
import image0 from "./images/0.jpg";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [image0, image1, image2, image3, image4, image5, image6],
  };

  constructor(props) {
    super(props);
    this.state = {
      noOfWrong: 0,
      guessed: new Set(),
      answer: randomName(),
      mode: "Gryffindor", //G 0, S 1, R 2, H 3
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
    this.setG = this.setG.bind(this);
    this.setS = this.setS.bind(this);
    this.setR = this.setR.bind(this);
    this.setH = this.setH.bind(this);
  }

  reset() {
    this.setState({
      noOfWrong: 3,
      guessed: new Set(),
      answer: randomName(this.state.mode),
    });
  }

  setG() {
    this.setState({
        noOfWrong: 0,
        guessed: new Set(),
        answer: randomName("Gryffindor"),
        mode: "Gryffindor",
      });
  }

  setS() {
    this.setState({
        noOfWrong: 0,
        guessed: new Set(),
        answer: randomName("Slytherin"),
        mode: "Slytherin",
      }); 
  }

  setR() {
    this.setState({
        noOfWrong: 0,
        guessed: new Set(),
        answer: randomName("Ravenclaw"),
        mode: "Ravenclaw",
      }); 
  }

  setH() {
    this.setState({
        noOfWrong: 0,
        guessed: new Set(),
        answer: randomName("Hufflepuff"),
        mode: "Hufflepuff",
      }); 
  }

  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

  handleGuess(evt) {
    let letter = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      noOfWrong: st.noOfWrong + (st.answer.includes(letter) ? 0 : 1),
    }));
  }

  generateKeypad() {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  render() {
    const gameOver = this.state.noOfWrong >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameState = this.generateKeypad();
    if (isWinner) gameState = "Good. You have figured out your fellow.";
    if (gameOver) gameState = "Oh no... Maybe 1 more year at Hogwarts?";
    let restart = gameOver || isWinner;
    return (
      <div className="Hangman">
        <h2>Hangman at Hogwarts</h2>
        <p>
        <gryButton id="gry" onClick={this.setG}>
            Gryffindor
        </gryButton>
        <slyButton id="sly" onClick={this.setS}>
            Slytherin
        </slyButton>
        <ravButton id="rav" onClick={this.setR}>
            Ravenclaw
        </ravButton>
        <hufButton id="huf" onClick={this.setH}>
            Hufflepuff
        </hufButton>
        </p>
        <img src={this.props.images[this.state.noOfWrong]} alt="HangMan" />
        <p>
          {this.props.maxWrong - this.state.noOfWrong} /{" "}
          {this.props.maxWrong}
        </p>
        <p>Guess the name of a fellow wizard or witch in</p>
        <p>{this.state.mode}</p>
        <p className="Hangman-word">
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>
        <p className="Hangman-btns">{gameState}</p>
        {restart && (
          <button id="reset" onClick={this.reset}>
            Let me try again!
          </button>
        )}
      </div>
    );
  }
}

export default Hangman;
