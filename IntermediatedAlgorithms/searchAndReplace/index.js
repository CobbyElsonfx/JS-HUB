function myReplace(str, before, after) {
    let newstr = str.split(" ")
    if (before[0].toUpperCase() == before[0]){
      for(let x = 0; x < str.length; x++){
      if(newstr[x] ==  before ){
      newstr.splice(newstr.indexOf(newstr[x]), 1, after[0].toUpperCase() + after.split("").slice(1,after.length).join(""))
      }
    }
       
    }else{
    for(let x = 0; x < str.length; x++){
      if(newstr[x] ==  before ){
      newstr.splice(newstr.indexOf(newstr[x]), 1, after[0].toLowerCase() + after.split("").slice(1,after.length).join(""))
      }
    }  }
  
  
    
  return newstr.join(" ")
  }
  
  myReplace("Let us get back to more Coding", "Coding", "algorithms");