let redHeights = [3.4, 5, 2.2, 9, 5, 3]
let blueHeights = [5, 8, 4, 2.1, 9.2, 8]


function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);

    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";
    for (let index = 0; index < redShirtHeights.length; index++) {
        const redShirtHeight = redShirtHeights[index];
        const blueShirtHeight = blueShirtHeights[index];

        if (shirtColorInFirstRow === "RED") {
            if (redShirtHeight >= blueShirtHeight) return false;
        } else if (blueShirtHeight >= redShirtHeight) return false;

    }
    return true;
}

console.log(classPhotos(blueHeights, redHeights))