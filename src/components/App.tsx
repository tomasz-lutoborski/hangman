import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routesConfig from "../routes";
import { Language, SettingsContextType } from "../types";

const router = createBrowserRouter(routesConfig);

export const SettingsContext = createContext<SettingsContextType>({
  wordLength: 3,
  setWordLength: () => {},
  numberOfTrials: 3,
  setNumberOfTrials: () => {},
  language: "polish",
  setLanguage: () => {},
});

export default function App() {
  const [wordLength, setWordLength] = useState(3);
  const [numberOfTrials, setNumberOfTrials] = useState(3);
  const [language, setLanguage] = useState<Language>("polish");

  return (
    <SettingsContext.Provider
      value={{
        wordLength,
        setWordLength,
        numberOfTrials,
        setNumberOfTrials,
        language,
        setLanguage,
      }}
    >
      <RouterProvider router={router} />
    </SettingsContext.Provider>
  );
}
