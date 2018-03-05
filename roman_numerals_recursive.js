function toRoman(num) {
  // start your code here
  var angka=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
  var symbol=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  var tempSymbol=''
  if(num===0){
    return ''
  }
  else{
    for (var i = 0; i < angka.length; i++) {
      if(num-angka[i]>=0){
        num=num-angka[i]
        tempSymbol+=symbol[i]+''+toRoman(num)
        return tempSymbol
      }
    }
  }
  return to_roman(num);
}

console.log('My totally sweet testing script for new roman\n')
console.log('num | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

module.exports = toRoman
