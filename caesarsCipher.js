function rot13(str) {
  let alpha = "ABCDEFGHIJKLM NOPQRSTUVWXYZ";
  let new_str = ""
  for (let i = 0; i < str.length; i++){
    if (str[i].length === 1 && str[i].match(/[a-z]/i)) {
      let indx_alpha = alpha.indexOf(str[i]);
      if (indx_alpha > alpha.indexOf('M')){
        new_str += alpha[indx_alpha - 14];
      } else {
        new_str +=  alpha[indx_alpha + 14];
      }
    } else {
      new_str += str[i]
    }
  }
  
  return new_str;
}
