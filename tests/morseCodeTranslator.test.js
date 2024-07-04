import { englishToMorse, morseToEnglish } from '../Scripts/translator';

describe('Morse Code Translator', () => {
  it('should translate English to Morse Code', () => {
    expect(englishToMorse('HELLO')).toBe('.... . .-.. .-.. ---');
    expect(englishToMorse('WORLD')).toBe('.-- --- .-. .-.. -..');
  });

  it('should translate Morse Code to English', () => {
    expect(morseToEnglish('.... . .-.. .-.. ---')).toBe('HELLO');
    expect(morseToEnglish('.-- --- .-. .-.. -..')).toBe('WORLD');
  });

  it('should handle spaces correctly', () => {
    expect(englishToMorse('HELLO WORLD')).toBe('.... . .-.. .-.. ---   .-- --- .-. .-.. -..');
    expect(morseToEnglish('.... . .-.. .-.. ---   .-- --- .-. .-.. -..')).toBe('HELLO WORLD');
  });
});
