let waitTime = [5,6,7,1,2,33]
let secondWaitTime = [6,7,8,1,66,7]

function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b)

    let totalWaitingTime = 0;
    for (let index = 0; index < queries.length; index++) {
        const duration = queries[index];
        const queriesLeft = queries.length - (index + 1);
        totalWaitingTime += duration * queriesLeft;
    }
    return totalWaitingTime;
}

console.log(minimumWaitingTime(waitTime))
console.log(minimumWaitingTime(secondWaitTime))

