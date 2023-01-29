import styles from "./LetterButton.module.css";

interface LetterButtonProps {
  letter: string;
  onClick: (letter: string) => void;
}

function LetterButton(props: LetterButtonProps) {
  return (
    <button
      onClick={() => props.onClick(props.letter)}
      className={styles.letterButton}
    >
      {props.letter}
    </button>
  );
}

export default LetterButton;
