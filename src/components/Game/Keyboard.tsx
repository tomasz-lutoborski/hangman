import { useContext } from "react";
import { SettingsContext } from "../App";
import LetterButton from "./LetterButton";
import styles from "./Keyboard.module.css";

interface KeyboardProps {
  onLetterClick: (letter: string) => void;
}

const ENGLISH_ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
const POLISH_ALPHABET = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż".split("");

function Keyboard({ onLetterClick }: KeyboardProps) {
  const { language } = useContext(SettingsContext);

  const alphabet = language === "english" ? ENGLISH_ALPHABET : POLISH_ALPHABET;

  return (
    <div className={styles.container}>
      {alphabet.map((letter, index) => {
        return (
          <LetterButton letter={letter} key={index} onClick={onLetterClick} />
        );
      })}
    </div>
  );
}

export default Keyboard;
