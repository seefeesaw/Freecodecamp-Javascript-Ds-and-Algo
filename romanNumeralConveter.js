function getTarget(num) {
  const obj = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
    2000: "M"
  }
  for (let key in obj){
    
    if (key > num){
      
      let keys = Object.keys(obj);
      let loc = keys.indexOf(key);
      let target = keys[loc - 1]
      return target
    }
  }
}

function convertToRoman(num) {
    const obj = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
    10000: "S"
  }
  let str = "";
  let i = 0;
  let target = num - i;
  while(num >= 1){
    
    target =  getTarget(num);
    str += obj[target];
    num -= target;
    i = target
    console.log(target)
  }
  return str;

}

convertToRoman(1996);
