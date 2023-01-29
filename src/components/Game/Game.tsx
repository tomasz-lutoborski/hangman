import React, { useEffect, useState } from "react";
import { getRandomWordOfSpecifiedLenght } from "../../engine";
import { SettingsContext } from "../App";
import Keyboard from "./Keyboard";
import Word from "./Word";
import styles from "./Game.module.css";

export default function Game() {
  const [word, setWord] = useState<string[]>([]);
  const { wordLength, numberOfTrials, language } =
    React.useContext(SettingsContext);

  useEffect(() => {
    function getWord() {
      const word = getRandomWordOfSpecifiedLenght(wordLength, language);
      const wordArray: string[] = word.split("");
      setWord(wordArray);
    }

    if (word.length <= 0) {
      getWord();
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1>Guess the word</h1>
      <Word word={word} />
      <Keyboard />
    </div>
  );
}
