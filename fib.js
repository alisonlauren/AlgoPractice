function getNthFib(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while (counter <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++;
    }
    //edge case in case one gets called
    return n > 1 ? lastTwo[1] : lastTwo[0];
}
console.log(getNthFib(50))



function getNthFib(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while (counter <= 3) {
        let nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1]
    }
}




























