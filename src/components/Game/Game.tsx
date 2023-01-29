import React, { useContext, useEffect, useState } from "react";
import { getRandomWordOfSpecifiedLength } from "../../engine";
import { SettingsContext } from "../App";
import Keyboard from "./Keyboard";
import Word from "./Word";
import styles from "./Game.module.css";
import Bomb from "./Bomb";

export default function Game() {
  const [word, setWord] = useState<string[]>([]);
  const [visibleLetters, setVisibleLetters] = useState<number[]>([]);
  const { wordLength, numberOfTrials, language, setNumberOfTrials } =
    useContext(SettingsContext);

  function changeNumberOfTrials() {
    setNumberOfTrials(numberOfTrials - 1);
    if (numberOfTrials <= 0) {
      alert("You lost!");
    }
  }

  function checkLetter(letter: string) {
    if (word.includes(letter)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          setVisibleLetters((prev) => [...prev, i]);
        }
      }
    } else {
      changeNumberOfTrials();
    }
  }

  function onLetterClick(letter: string) {
    checkLetter(letter);
  }

  useEffect(() => {
    function getWord() {
      const word = getRandomWordOfSpecifiedLength(wordLength, language);
      const wordArray: string[] = word.split("");
      setWord(wordArray);
    }

    if (word.length <= 0) {
      getWord();
    }
  }, []);

  return (
    <div className={styles.container}>
      <Bomb />
      <h1 className={styles.title}>Guess the word</h1>
      <Word word={word} visibleLetters={visibleLetters} />
      <Keyboard onLetterClick={onLetterClick} />
    </div>
  );
}
