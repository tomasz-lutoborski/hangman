import { useContext } from "react";
import { SettingsContext } from "../App";
import LetterButton from "./LetterButton";
import styles from "./Keyboard.module.css";

const ENGLISH_ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
const POLISH_ALPHABET = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż".split("");

function Keyboard() {
  const { language } = useContext(SettingsContext);

  const alphabet = language === "english" ? ENGLISH_ALPHABET : POLISH_ALPHABET;

  return (
    <div className={styles.container}>
      {alphabet.map((letter, index) => {
        return <LetterButton letter={letter} key={index} />;
      })}
    </div>
  );
}

export default Keyboard;
