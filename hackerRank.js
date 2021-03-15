
//adding up all the elements within an array
function simpleArraySum(ar) {
    let sum = 0;
    for (let index = 0; index < ar.length; index++) {
    const element = ar[index];
    sum += element
    
}
    return sum;
}
console.log(simpleArraySum([1,2,3,4,5,6]))

//compare the triplets on hackerank
//comparing two different arrays with 3 different possibilities 
function compareTriplets(a, b) {
    let score = [0,0]

    for (let i = 0; i < a.length; i++)
        a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : ""
    return score
}