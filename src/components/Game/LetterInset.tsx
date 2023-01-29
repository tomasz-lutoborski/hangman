import styles from "./LetterInset.module.css";

interface LetterInsetProps {
  letter: string;
  index: number;
}

export default function LetterInset({ letter, index }: LetterInsetProps) {
  return <div className={styles.letterInset}>{letter}</div>;
}
