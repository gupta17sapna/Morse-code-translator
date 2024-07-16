import { englishToMorse, morseToEnglish } from './translator.js';

const englishInput = document.getElementById('englishInput');
const morseInput = document.getElementById('morseInput');
const errorDiv = document.getElementById('error');

const isValidEnglish = (text) => /^[A-Za-z0-9 ]*$/.test(text);
const isValidMorse = (text) => /^[\.\-\s]*$/.test(text);

document.getElementById('toMorseBtn').addEventListener('click', () => {
    const englishText = englishInput.value;
    if (!isValidEnglish(englishText)) {
        errorDiv.textContent = 'Invalid input: English text should only contain letters, numbers, and spaces.';
        return;
    }
    try {
        const morseText = englishToMorse(englishText);
        morseInput.value = morseText;
        errorDiv.textContent = '';
    } catch (error) {
        errorDiv.textContent = error.message;
    }
});

document.getElementById('toEnglishBtn').addEventListener('click', () => {
    const morseText = morseInput.value;
    if (!isValidMorse(morseText)) {
        errorDiv.textContent = 'Invalid input: Morse code should only contain dots, dashes, and spaces.';
        return;
    }
    try {
        const englishText = morseToEnglish(morseText);
        englishInput.value = englishText;
        errorDiv.textContent = '';
    } catch (error) {
        errorDiv.textContent = error.message;
    }
});


const morseCodeMap = {
    "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...",
    "8": "---..", "9": "----.", "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.",
    "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.",
    "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--",
    "Z": "--.."
};

const characterGrid = document.querySelector('.character-grid');

for (const [char, morse] of Object.entries(morseCodeMap)) {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${char}</strong><br>${morse}`;
    characterGrid.appendChild(div);
}
