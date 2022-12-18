function extraLongFactorials(n) {
    // Write your code here
    let product  = BigInt(1)
    for(let x = n; x >= 1; x--){
        product = product * BigInt(x);
    }
        return product // you may convert the product to String to remove the n at the end the output eg. product.toString()

}

console.log(extraLongFactorials(25)) 