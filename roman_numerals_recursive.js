/*
function toRoman paramater input number
  1. Buat kondisi base case dimana input sama dengan nol maka
      2. return ''
  3. jika bukan kondisi di atas maka
    4. Buat variable decimal sama dengan array dengan isi nilai 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
    5. Buat variable roman sama dengan array dengan isi nilai 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
    6 .LOOP index i sama dengan nol , index i kurang dari panjang decimal dan pertambahan index i satu
      7. Buat kondisi jika input lebih besar sama dengan decimal index i maka
        8. return roman index i ditambah panggil function input dikurangi decimal index i
    end LOOP
end function

 */

function toRoman(input) {
  // start your code here
  if (input === 0) {
    return '';
  } else {
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (var i = 0; i < decimal.length; i++) {
      if (input >= decimal[i]) {
        return roman[i] + toRoman(input - decimal[i]);
      }
    }
  }
}

console.log('My totally sweet testing script for new roman\n');
console.log('input | expected | actual');
console.log('——————|——————————|————————');
console.log('4     | IV       | ', toRoman(4));
console.log('9     | IX       | ', toRoman(9));
console.log('23    | XXIII    | ', toRoman(23));
console.log('1453  | MCDLIII  | ', toRoman(1453));
console.log('1646  | MDCXLVI  | ', toRoman(1646));

module.exports = toRoman;
