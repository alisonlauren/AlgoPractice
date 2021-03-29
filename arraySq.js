let numbers = [2,4,6]

function sortedSquaredArray(array) {
    let squaredArray = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let newIndex = element * element;
        squaredArray.push(newIndex);
    }
    squaredArray.sort((a,b) => a - b);
    return squaredArray;
}

console.log(sortedSquaredArray(numbers))

