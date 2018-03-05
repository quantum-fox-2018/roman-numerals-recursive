
const pecahanRoman = [
  {value:1000, label:"M"},
  {value:900, label:"CM"},
  {value:500, label:"D"},
  {value:400, label:"CD"},
  {value:100, label:"C"},
  {value:90, label:"XC"},
  {value:50, label:"L"},
  {value:40, label:"XL"},
  {value:10, label:"X"},
  {value:9, label:"IX"},
  {value:5, label:"V"},
  {value:4, label:"IV"},
  {value:1, label:"I"},]

function toRoman(input) {
  // start your code here

  if(input === 0){
    return "";
  }

  for (var i = 0; i < pecahanRoman.length; i++) {
    var temp = "";
    while(input - pecahanRoman[i].value >= 0){
      temp += pecahanRoman[i].label;
      input -= pecahanRoman[i].value;
      return temp + toRoman(input);
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
