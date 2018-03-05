function toRoman(input) {
  let objRoman = [
    {angka: 1, romawi:'I'},
    {angka: 4, romawi:'IV'},
    {angka: 5, romawi:'V'},
    {angka: 9, romawi:'IX'},
    {angka: 10, romawi:'X'},
    {angka: 40, romawi:'XL'},
    {angka: 50, romawi:'L'},
    {angka: 90, romawi:'XC'},
    {angka: 100, romawi:'C'},
    {angka: 400, romawi:'CD'},
    {angka: 500, romawi:'D'},
    {angka: 900, romawi:'CM'},
    {angka: 1000, romawi:'M'},
  ];

  if(input <= 0){
    return ''
  } else {
    let stringRoman = '';
    for(let i=objRoman.length-1; i>=0; i--){
      if(input >= objRoman[i].angka){
        stringRoman += objRoman[i].romawi
        input-= objRoman[i].angka
        break;
      }
    }
    return stringRoman + toRoman(input);
    // return stringRoman + ', sisa =' + input;
  }
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('1     | I        | ', toRoman(1))
console.log('3     | III      | ', toRoman(3))
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

module.exports = toRoman
