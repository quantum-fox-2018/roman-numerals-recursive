function toRoman(input) {
  var numRom = [{
    num:1000,
    rom:'M'
  },{
    num:900,
    rom:'CM'
  },{
    num:500,
    rom:'D'
  },{
    num:400,
    rom:'CD'
  },{num:100,
    rom:'C'
  },{
    num:90,
    rom:'XC'
  },{
    num:50,
    rom:'L'
  },{
    num:40,
    rom:'XL'
  },{
    num:10,
    rom:'X'
  },{
    num:9,
    rom:'IX'
  },{
    num:5,
    rom:'V'
  },{
    num:4,
    rom:'IV'
  },{
    num:1,
    rom:'I'
  }];
  var roman = '';
  if(input==0){
    return roman;
  } else {
    for(let i=0;i<numRom.length;i++){
      if(input>=numRom[i].num){
        let hasil = input - numRom[i].num;
        roman += numRom[i].rom;
        return roman + toRoman(hasil)
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
