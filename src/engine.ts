import englishWords from "./assets/words/english.json";
import polishWords from "./assets/words/polish.json";
import { Language } from "./types";

export function getRandomWordOfSpecifiedLenght(
  length: number,
  language: Language
): string {
  const words: string[] = [];
  switch (language) {
    case "english":
      for (const word of englishWords) {
        if (word.length === length) {
          words.push(word);
        }
      }
    case "polish":
      for (const word of polishWords) {
        if (word.length === length) {
          words.push(word);
        }
      }
  }

  return words[Math.floor(Math.random() * words.length)];
}
