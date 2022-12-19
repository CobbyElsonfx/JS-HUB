function telephoneCheck(str) {
    let re = /[^\d{3}[\s|-]\d{3}[\s|-]\d{3}]/, re4 = /(^\(\d{3}\)\d{3}-\d{4})|(^\d{3}-\d{3}-\d{4})/, re5  = /^5{3}\d{7}/ ,re3 = /^1\s\d{3}[\s|-]\d{3}[\s|-]\d{4}/, re2 = /(^1\s?\(\d{3}\)[\s|-]?\d{3,}[\s|-]\d{4}$)/
    
    if (re5.test(str)== true|| re4.test(str)== true 
    || re3.test(str) == true || re.test(str) == true || re2.test(str) == true){
      return true
    }
    else{
      return false
    }
    
  }
  
  telephoneCheck("555-555-5555");