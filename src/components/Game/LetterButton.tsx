import styles from "./LetterButton.module.css";
function LetterButton({ letter }: { letter: string }) {
  return (
    <button
      onClick={() => {
        console.log(letter);
      }}
      className={styles.letterButton}
    >
      {letter}
    </button>
  );
}

export default LetterButton;
