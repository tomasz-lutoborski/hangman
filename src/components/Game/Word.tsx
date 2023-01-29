import LetterInset from "./LetterInset";
import styles from "./Word.module.css";

interface WordProps {
  word: string[];
  visibleLetters: number[];
}

export default function Word(props: WordProps) {
  return (
    <div className={styles.word}>
      {props.word.map((letter, index) => {
        return (
          <LetterInset
            letter={letter}
            index={index}
            key={index}
            visible={props.visibleLetters.includes(index)}
          />
        );
      })}
    </div>
  );
}
