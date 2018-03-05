function toRoman(input) {
  // start your code here
  var arrResult = [];
  if(input === 0){
    var strResult = arrResult.join('');
    return strResult;
  } else {
    if(input >= 1000){
      arrResult.push('M');
      input -= 1000;
      return arrResult + toRoman(input);
    }
    if(input >= 900){
      arrResult.push('CM');
      input -= 900;
      return arrResult + toRoman(input);
    }
    if(input >= 500){
      arrResult.push('D');
      input -= 500;
      return arrResult + toRoman(input);
    }
    if(input >= 400){
      arrResult.push('CD');
      input -= 400;
      return arrResult + toRoman(input);
    }
    if(input >= 100){
      arrResult.push('C');
      input -= 100;
      return arrResult + toRoman(input);
    }
    if(input >= 90){
      arrResult.push('XC');
      input -= 90;
      return arrResult + toRoman(input);
    }
    if(input >= 50){
      arrResult.push('L');
      input -= 50;
      return arrResult + toRoman(input);
    }
    if(input >= 40){
      arrResult.push('XL');
      input -= 40;
      return arrResult + toRoman(input);
    }
    if(input >= 10){
      arrResult.push('X');
      input -= 10;
      return arrResult + toRoman(input);
    }
    if(input >= 9){
      arrResult.push('IX');
      input -= 9;
      return arrResult + toRoman(input);
    }
    if(input >= 5){
      arrResult.push('V');
      input -= 5;
      return arrResult + toRoman(input);
    }
    if(input >= 4){
      arrResult.push('IV');
      input -= 4;
      return arrResult + toRoman(input);
    }
    if(input >= 1){
      arrResult.push('I');
      input -= 1;
      return arrResult + toRoman(input);
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
