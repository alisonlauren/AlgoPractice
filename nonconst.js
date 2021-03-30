function nonConstructibleChange(coins) {
    // probs going to be a new array here
    //definitely a for loop
    // this loop we want to manipulate so that it adds
    //every combination that the coins can create in sums
    // once the computer has run that, we want to find the smallest
    //quantitiy that is NOT in the sumCoins array.
    //and if i have no coins, just return the number one
    return 1;
}

let myCoins = [1,2,5]
let myothaCoins = [3,4,5,6,7]

function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);
    let currentChangeCreated = 0;
    for (const coin of coins) {
        if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
        currentChangeCreated += coin;
    }
    return currentChangeCreated + 1;
}

console.log(nonConstructibleChange(myCoins))
console.log(nonConstructibleChange(myothaCoins))