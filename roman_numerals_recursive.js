// function toRoman(input) {
//   var angka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   var romawi = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
//   if (input == 0) {
//     return ''
//   } else if (input >= 1000) {
//     return romawi[0] + toRoman(input - 1000);
//   } else if (input >= 900) {
//     return 'CM'+ toRoman(input - 900);
//   } else if (input >= 500) {
//     return 'D'+ toRoman(input - 500);
//   } else if (input >= 400) {
//     return 'CD'+ toRoman(input - 400);
//   } else if (input >= 100) {
//     return 'C'+ toRoman(input - 100);
//   } else if (input >= 90) {
//     return 'XC'+ toRoman(input - 90);
//   } else if (input >= 50) {
//     return 'L'+ toRoman(input - 50);
//   } else if (input >= 40) {
//     return 'XL'+ toRoman(input - 40);
//   } else if (input >= 10) {
//     return 'X'+ toRoman(input - 10);
//   } else if (input >= 9) {
//     return 'IX'+ toRoman(input - 9);
//   } else if (input >= 5) {
//     return 'V'+ toRoman(input - 5);
//   } else if (input >= 4) {
//     return 'IV'+ toRoman(input - 4);
//   } else if (input >= 1) {
//     return 'I'+ toRoman(input - 1);
//   }
//
// }

function toRoman(input) {
   var angka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   var romawi = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    if (input == 0) {
        return ''
    }else{
      for (var i = 0; i < angka.length; i++) {
      if (input >= angka[i]) {
        return romawi[i] + toRoman(input - angka[i]);
      }
    }
  }
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
