/*
SET variable library dengan value array dengan value = [[1000, 'M'],[900, 'CM'],[500, 'D'],[400, 'CD'],[100, 'C'],[90, 'XC'],
[50, 'L'],[40, 'XL'],[10, 'X'],[9, 'IX'],[5, 'V'],[4, 'IV'],[1, 'I']]

CREATE function toRoman dengan parameter sebuah angka bernama input

  IF input sama dengan 0
     maka kembalikan string kosong
  ELSE
    DO looping dari nilai i = 0 hingga panjang library, setiap iterasi i+1
      IF input masih lebih besar sama dengan dari library i index 0 maka
        kembalikan nilai library i index 1 ditambah dengan fungsi toRoman dengan parameter input yang telah dikurangi library i index 0
*/


var library = [[1000, 'M'],[900, 'CM'],[500, 'D'],[400, 'CD'],[100, 'C'],[90, 'XC'],
[50, 'L'],[40, 'XL'],[10, 'X'],[9, 'IX'],[5, 'V'],[4, 'IV'],[1, 'I']]

function toRoman(input) {
  // start your code here
  if (input === 0) {
    return ''
  } else {
    for (var i = 0; i < library.length; i++) {
      if (input >= library[i][0]) {
        return library[i][1] + toRoman(input - library[i][0])
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
