const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arrayNewWords = [];
  for (let i = 0; i < expr.length; i += 10) {
    let oneW = expr.slice(i, i + 10);
    arrayNewWords.push(oneW);
  }

  let arrReady = arrayNewWords;
  let s = arrReady.map((one) => {
    return one.replaceAll("10", ".").replaceAll("11", "-").replaceAll("0", "");
  });

  let strLast = "";
  for (let j = 0; j < s.length; j++) {
    if (s[j] === "**********") {
      strLast += " ";
    } else strLast += MORSE_TABLE[s[j]];
  }
  return strLast;
}

module.exports = {
  decode,
};
