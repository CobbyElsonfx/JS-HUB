function spinalCase(str) {

    return str.split(/_|\s|(?=[A-Z])/).join("-").toLowerCase()
    }
    
    spinalCase('This Is Spinal Tap');