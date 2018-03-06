function toRoman(num) {
  var roman = ["M", "D", "CD", "C", "L", "XL", "X", "IX", "V", "IV", "I"];
  var angka = [1000, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1];

  var hasil = '';
  for (var i = 0; i < angka.length; i++) {
    if (num < 1)
      return hasil;
    if (num >= angka[i]) {
      hasil = roman[i];
      return hasil + toRoman(num - angka[i]);
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

// module.exports = toRoman
