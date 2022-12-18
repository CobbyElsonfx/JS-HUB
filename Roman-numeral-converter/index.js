const rules = {
    1 : "I",
    4 : "IV",
    5 : "V",
    9 : "IX",
    10 : "X",
    40 : "XL",
    50 : "L",
    90 : "XC",
    100 : "C",
    400 : "CD",
    500 : "D",
    900 : "CM",
    1000: "M"
  
  }
  
  const subsValues = [1000,900 ,500,400,100,	90,50,40,10,9,5,4,1]
  
  function convertToRoman(num) {
    let output = ""
    let index = 0;
  
    while ( num > 0){
      const substract = subsValues[index]
      if(substract > num){
        index++;
      }else{
        num = num - substract;
        output  = output + rules[substract];     
      }
    }
   return output;
  }
  
  console.log(convertToRoman(25));