import LetterInset from "./LetterInset";
import styles from "./Word.module.css";

export default function Word({ word }: { word: string[] }) {
  return (
    <div className={styles.word}>
      {word.map((letter, index) => {
        return <LetterInset letter={letter} index={index} key={index} />;
      })}
    </div>
  );
}
