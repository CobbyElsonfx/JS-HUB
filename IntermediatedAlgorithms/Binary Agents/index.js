function binaryAgent(str) {
    return String.fromCharCode(...str.split(" ").map(item => parseInt(item,2))) //  makes a copy of the string using the spread operand and then split into array so we can use the map funtion , to convert each item in the array to it decimal using parseInt
    }
    
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");