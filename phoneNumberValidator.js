function telephoneCheck(str) {
   // regex pattern for phone number
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;

    const re1 = /^\(?([1])\)?[-. ]?([0-9]{3})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;

    const re2 = /^\(?([1])\)?[-. ]?(\([0-9]{3}\))\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g

    const re3 = /^\(?([0-9]{3})^\)\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g

       const re4 = /^\(?(\([0-9]{3}\))?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g

    const re5 = /^\(?(\([0-9]{3})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g

    const re6 = /^\(?([0-9]{3}\))?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g

    // check if the phone number is valid
    let result = str.match(re);
    let result1 = str.match(re1);
    let result2 = str.match(re2);
    

    let result4 = str.match(re4);
    let result5 = str.match(re5);
    let result6 = str.match(re6);

    
    if ((result || result2 || result1)) {
      if (result5 || result6){
        if (!result4){
          return false
        }
      }
     
        return true;
    }
    else {
        return false;
    }
}


telephoneCheck("555-555-5555");
