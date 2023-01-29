import styles from "./Grid.module.css";

export default function Grid() {
  const elements = [];
  for (let i = 0; i < 100; i++) {
    elements.push(
      <div className={styles.element} key={i}>
        {i}
      </div>
    );
  }

  return <div className={styles.grid}>{elements}</div>;
}
