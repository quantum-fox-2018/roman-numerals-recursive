function rekursiveRomawi(romawi){

  var romanResult = '';
  var arabicNumber = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var romanNumber = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
  var romanCalc = romawi;
  var condition = true;

  if(romawi>0){
    for(var counter=arabicNumber.length-1;condition == true;counter--){

      if(romanCalc >= arabicNumber[counter]){
        romanCalc = romanCalc - arabicNumber[counter];
        romanResult = romanResult + romanNumber[counter];
        condition = false;
      }
    }
    return romanResult + rekursiveRomawi(romanCalc);
  }
  else{
    return romanResult;
  }

}

console.log('4     | IV       | ',rekursiveRomawi(4));
console.log('9     | IX       | ',rekursiveRomawi(9));
console.log('23    | XXIII    | ',rekursiveRomawi(23));
console.log('1453  | MCDLIII  | ',rekursiveRomawi(1453));
console.log('1646  | MDCXLVI  | ',rekursiveRomawi(1646));
