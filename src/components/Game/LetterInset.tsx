import styles from "./LetterInset.module.css";

interface LetterInsetProps {
  letter: string;
  index: number;
  visible: boolean;
}

export default function LetterInset({
  letter,
  index,
  visible,
}: LetterInsetProps) {
  return <div className={styles.letterInset}>{visible ? letter : ""}</div>;
}
