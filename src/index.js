const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const morseAltered = {
    '**********': ' ',
};
const maxLength = 5;
for (const key in MORSE_TABLE) {
    const rest = maxLength - key.length;
    const prefix = Array.from({length: rest}).reduce((acc) => acc += '00', '');
    const rep = key.replace(/\./g, '10').replace(/-/g, '11');
    const enc = prefix + rep;

    morseAltered[enc] = MORSE_TABLE[key];
}

function decode(expr) {
    const arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }

    return arr.reduce((acc, char) => {
        acc += morseAltered[char];
        return acc;
    }, '');
}

module.exports = {
    decode
}