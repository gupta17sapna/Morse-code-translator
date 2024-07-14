const morseCodeMap = {
  "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....",
  "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.",
  "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
  "Y": "-.--", "Z": "--..",
  "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...",
  "8": "---..", "9": "----.", "0": "-----", " ": " "
};

export const englishToMorse = (text) => {
  if (!/^[A-Za-z0-9 ]*$/.test(text)) {
      throw new Error('Invalid input: English text should only contain letters, numbers, and spaces.');
  }
  return text.toUpperCase().split(' ').map(word => {
      return word.split('').map(char => morseCodeMap[char] || '').join(' ');
  }).join('   ');
};

export const morseToEnglish = (morse) => {
  if (!/^[\.\-\s]*$/.test(morse)) {
      throw new Error('Invalid input: Morse code should only contain dots, dashes, and spaces.');
  }
  const morseToEnglishMap = Object.entries(morseCodeMap).reduce((acc, [key, value]) => {
      acc[value] = key;
      return acc;
  }, {});

  return morse.split('   ').map(word => {
      return word.split(' ').map(char => morseToEnglishMap[char] || '').join('');
  }).join(' ');
};
