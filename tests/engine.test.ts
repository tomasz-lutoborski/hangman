import englishWords from "../src/assets/words/english.json";
import polishWords from "../src/assets/words/polish.json";
import { getRandomWordOfSpecifiedLength } from "../src/engine";
import { test, expect } from "vitest";

test("gets english word of correct lenght", () => {
  const word1 = getRandomWordOfSpecifiedLength(5, "english");
  const word2 = getRandomWordOfSpecifiedLength(8, "english");
  const word3 = getRandomWordOfSpecifiedLength(10, "english");
  expect(word1.length).toBe(5);
  expect(word2.length).toBe(8);
  expect(word3.length).toBe(10);
  expect(englishWords).toContain(word1);
  expect(englishWords).toContain(word2);
  expect(englishWords).toContain(word3);
});

test("gets polish word of correct lenght", () => {
  const word1 = getRandomWordOfSpecifiedLength(5, "polish");
  const word2 = getRandomWordOfSpecifiedLength(8, "polish");
  const word3 = getRandomWordOfSpecifiedLength(10, "polish");
  expect(word1.length).toBe(5);
  expect(word2.length).toBe(8);
  expect(word3.length).toBe(10);
  expect(polishWords).toContain(word1);
  expect(polishWords).toContain(word2);
  expect(polishWords).toContain(word3);
});
