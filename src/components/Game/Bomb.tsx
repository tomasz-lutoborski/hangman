import { useContext } from "react";
import { SettingsContext } from "../App";
import styles from "./Bomb.module.css";
//@ts-ignore
import { ReactComponent as Logo } from "../../assets/bomb.svg";

export default function Bomb() {
  const { numberOfTrials } = useContext(SettingsContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.number}>{numberOfTrials}</h2>
      <Logo className={styles.bomb} />
    </div>
  );
}
