function whatIsInAName(collection, source) {
    const keysOfSource = Object.keys(source)
  
    return collection.filter(obj => {
    for (let x = 0 ; x < keysOfSource.length ; x++){
      if (!obj.hasOwnProperty(keysOfSource[x])|| obj[keysOfSource[x]] !== source[keysOfSource[x]] ){
        return false   
                                           } 
                                               }
        return true
                                      }
                              )
      // console.log(collection[x],Object.keys(source))
    
  
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });