a = ["a", "b", "c", "d"]
b = ["a"]

//write a function that takes in two arrays, this function will return a new array that
//eliminates all of the same elements shared between the two arrays
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}

console.log(array_diff(a,b))

