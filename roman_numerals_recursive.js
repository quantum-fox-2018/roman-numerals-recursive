function toRoman(input) {
  var roman = ''; num = input
  if(num<1){
    return roman
  }

  while(num>=1000){
    roman += 'M'
    num -= 1000
  }

  if(num>=500){
    if(num>=900){
      roman += 'CM'
      num -= 900
    }
    else {
      roman += 'D'
      num -= 500
    }
  }

  while(num>=100){
    if(num>=400){
      roman += 'CD'
      num -= 400
    }
    else {
      roman += 'C'
      num -= 100
    }
  }

  if(num>=50){
    if(num>=90){
      roman += 'XC'
      num -= 90
    }
    else {
      roman += 'L'
      num -= 50
    }
  }

  while(num>=10){
    if(num>=40){
      roman += 'XL'
      num -= 40
    }
    else {
      roman += 'X'
      num -= 10
    }
  }

  if(num>=5){
    if(num>=9){
      roman += 'IX'
      num -= 9
    }
    else {
      roman += 'V'
      num -= 5
    }
  }

  while(num>=1){
    if(num>=4){
      roman += 'IV'
      num -= 4
    }
    else {
      roman += 'I'
      num -= 1
    }
  }

  return roman + toRoman(num);
}

// console.log(toRoman(5300))
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))
