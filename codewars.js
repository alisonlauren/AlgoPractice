a = ["a", "b", "c", "d"]
b = ["a"]

//write a function that takes in two arrays, this function will return a new array that
//eliminates all of the same elements shared between the two arrays
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}

console.log(array_diff(a,b))

function array_diff(c,d) {
    return c.filter(e => !d.includes(e));
}
c = [1, 2, 3, 4, 5, 6]
d = [5,6]
console.log(array_diff(c,d))

function array_diff(a,b) {
    return a.filter(e => !b.includes(e))
}
console.log(array_diff(a,b))


