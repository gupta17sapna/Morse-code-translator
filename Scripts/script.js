import { englishToMorse, morseToEnglish } from './translator.js';

document.getElementById('toMorseBtn').addEventListener('click', () => {
  const englishText = document.getElementById('englishInput').value;
  const morseText = englishToMorse(englishText);
  document.getElementById('result').textContent = morseText;
});

document.getElementById('toEnglishBtn').addEventListener('click', () => {
  const morseText = document.getElementById('morseInput').value;
  const englishText = morseToEnglish(morseText);
  document.getElementById('result').textContent = englishText;
});
