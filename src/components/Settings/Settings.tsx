import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import { Language } from "../../types";
import { SettingsContext } from "../App";
import SettingsOption from "./SettingsOption";

export default function Settings() {
  const navigate = useNavigate();
  const { setWordLength, setNumberOfTrials, setLanguage } =
    React.useContext(SettingsContext);

  function handleStartGame(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setWordLength(
      parseInt(((e.target as HTMLFormElement)[0] as HTMLInputElement).value)
    );
    setNumberOfTrials(
      parseInt(((e.target as HTMLFormElement)[1] as HTMLInputElement).value)
    );
    setLanguage(
      ((e.target as HTMLFormElement)[2] as HTMLInputElement).value as Language
    );

    navigate("/game");
  }
  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleStartGame}>
        <SettingsOption
          name="word-length"
          title="Word length"
          options={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        />
        <SettingsOption
          name="number-of-trials"
          title="Number of trials"
          options={[3, 4, 5, 6, 7, 8, 9]}
        />
        <SettingsOption
          name="language"
          title="Language"
          options={["polish", "english"]}
        />
        <button type="submit">Start game</button>
      </form>
    </div>
  );
}
