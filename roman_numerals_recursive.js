function toRoman(input) {
  // start your code here
  let objRoman = [{
    roman: 'I',
    value: 1
  },{
    roman: 'IV',
    value: 4
  },{
    roman: 'V',
    value: 5
  },{
    roman: 'IX',
    value: 9
  },{
    roman: 'X',
    value: 10
  },{
    roman: 'XL',
    value: 40
  },{
    roman: 'L',
    value: 50
  },{
    roman: 'XC',
    value: 90
  },{
    roman: 'C',
    value: 100
  },{
    roman: 'CD',
    value: 400
  },{
    roman: 'D',
    value: 500
  },{
    roman: 'CM',
    value: 900
  },{
    roman: 'M',
    value: 1000
  }]

  if(input == 0) {
    return ''
  } else {
    for(let i=objRoman.length-1; i>=0; i--) {
      if(input - objRoman[i].value >= 0) {
        return objRoman[i].roman + toRoman(input-objRoman[i].value)
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
