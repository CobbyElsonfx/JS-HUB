function pairElement(str) {

    const dnaKey = {
      A : "T",
      T : "A",
      C : "G",
      G : "C"
  
    }
    let newstr = str.split("");
    return newstr.map(x=> [x ,dnaKey[x]])
  }
  
  pairElement("GCG");