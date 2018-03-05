function toRoman(input) {
  if (input >= 1000) { input -= 1000; return 'M' + toRoman(input);}
  else if (input >= 900) { input -= 900; return 'CM' + toRoman(input);}
  else if (input >= 500) { input -= 500; return 'D' + toRoman(input);}
  else if (input >= 400) { input -= 400; return 'CD' + toRoman(input);}
  else if (input >= 100) { input -= 100; return 'C' + toRoman(input);}
  else if (input >= 90) { input -= 90; return 'XC' + toRoman(input);}
  else if (input >= 50) { input -= 50; return 'L' + toRoman(input);}
  else if (input >= 40) { input -= 40; return 'XL' + toRoman(input);}
  else if (input >= 10) { input -= 10; return 'X' + toRoman(input);}
  else if (input >= 9) { input -= 9; return 'IX' + toRoman(input);}
  else if (input >= 5) { input -= 5; return 'V' + toRoman(input);}
  else if (input >= 4) { input -= 4; return 'IV' + toRoman(input);}
  else if (input < 4 && input > 0) { input -= 1; return 'I' + toRoman(input);}
  else { return '';}

}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

module.exports = toRoman
