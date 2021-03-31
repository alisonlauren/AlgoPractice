// let numbers = [2,4,6]

// function sortedSquaredArray(array) {
//     let squaredArray = []
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         let newIndex = element * element;
//         squaredArray.push(newIndex);
//     }
//     squaredArray.sort((a,b) => a - b);
//     return squaredArray;
// }

// console.log(sortedSquaredArray(numbers))






















const myNumbers = [2,3,4]
const myNumbersUnordered = [4,3,2]

function sortedSquaredArray(array) {
    let newArray = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let squaredNumber =  element * element;
        newArray.push(squaredNumber);
        
    }
    newArray.sort((a,b) => a - b);
    return newArray
}

console.log(sortedSquaredArray(myNumbers))
console.log(sortedSquaredArray(myNumbersUnordered))

