const input = 'Hello world zero hello hello aaaa';
const rus = 'абвгдеёжзийклмнопрстуфхцчтшщъыьэюя';
const inputRus = 'я я Бу испугался я я я я друг сёгун сегун';
const inputRus1 = 'Бу испугался я друг';

function coder(text) {
  const input = text.toLowerCase();
  let key = 1;
  let output = '';
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === ' ') {
      key += 1;
      output += ' ';
    }
    else {
      if (input.charCodeAt(i) + key > 122) output += String.fromCharCode(input.charCodeAt(i) + key - 26);
      else output += String.fromCharCode(input.charCodeAt(i) + key);
    }
  }
  return output;
}

function decoder(text) {
  const input = text.toLowerCase();
  let key = 1;
  let output = '';
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === ' ') {
      key += 1;
      output += ' ';
    }
    else {
      if (input.charCodeAt(i) - key < 97) output += String.fromCharCode(input.charCodeAt(i) - key + 26);
      else output += String.fromCharCode(input.charCodeAt(i) - key);
    }
  }
  return output;
}

function coderRus(text) {
  let input = text.toLowerCase();
  let temp = '';
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === 'ё') temp += 'е';
    else temp += input[i];
  }
  input = temp;
  let key = 1;
  let output = '';
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === ' ') {
      key += 1;
      output += ' ';
    }
    else {
      if (input.charCodeAt(i) + key > 1103) output += String.fromCharCode(input.charCodeAt(i) + key - 32);
      else output += String.fromCharCode(input.charCodeAt(i) + key);
    }
  }
  return output;
}

function decoderRus(text) {
  const input = text.toLowerCase();
  let key = 1;
  let output = '';
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === ' ') {
      key += 1;
      output += ' ';
    }
    else {
      if (input.charCodeAt(i) - key < 1072) output += String.fromCharCode(input.charCodeAt(i) - key + 32);
      else output += String.fromCharCode(input.charCodeAt(i) - key);
    }
  }
  return output;
}

console.log(
  'Result\n',
  inputRus, '\n',
  coderRus(inputRus), '\n',
  decoderRus(coderRus(inputRus))
);
/*
for (let i = 0; i < rus.length; i += 1) {
  console.log(`Rus letter "${rus[i]}" =`, rus.charCodeAt(i));
}*/

