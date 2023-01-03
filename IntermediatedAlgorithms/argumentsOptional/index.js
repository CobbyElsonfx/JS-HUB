function addTogether() {
    const [a,b] = arguments // destructuring argument object
     const add = a + b
    if (typeof(a) !== "number"){
      return undefined
    }
     
    if (arguments.length == 1){
      return  (b) => addTogether(a,b)  // the order matters 
    }  
    if (typeof(b) !==  "number"){
      return undefined
    }
    
    return add;  
  }
  
  addTogether(2,3);