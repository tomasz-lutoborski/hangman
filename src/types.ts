export type Language = "english" | "polish";

//create interface for SettingsContext
export type SettingsContextType = {
  wordLength: number;
  setWordLength: (wordLength: number) => void;
  numberOfTrials: number;
  setNumberOfTrials: (numberOfTrials: number) => void;
  language: Language;
  setLanguage: (language: Language) => void;
};
