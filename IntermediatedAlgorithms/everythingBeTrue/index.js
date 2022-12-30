function truthCheck(collection, pre) {
    // checks if every array of object.key is true fall all object arrays
    console.log(collection.every(obj => obj[pre]));
  }
  
  truthCheck([{name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");