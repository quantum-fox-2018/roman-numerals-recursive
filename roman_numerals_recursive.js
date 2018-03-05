function toRoman(input) {
  // start your code here
  let arrResult = [];
  let arrRoman = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
  let arrReduction = [1,4,5,9,10,40,50,90,100,400,500,900,1000];

  if (input == 0) {
    return '';
  } else  {
      
    for (i = 0; i < arrRoman.length; i++) {
      if (input >= arrReduction[arrReduction.length-1] && input < 3000) {
        arrResult.push(arrRoman[arrRoman.length-1]);
        input -= arrReduction[arrReduction.length-1];
      } else if (input >= arrReduction[i] && input < arrReduction[i+1]) {
        arrResult.push(arrRoman[i]);
        input -= arrReduction[i];
      }
    }
    return arrResult.join('') + toRoman(input);
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
