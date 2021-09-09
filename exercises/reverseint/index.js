// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // Personal solution
    let numberArray = n.toString().split("")
    let reverse = []
    let negTack

    if (numberArray[0] === '-') negTack = numberArray.splice(0,1)

    for (const number of numberArray) reverse.unshift(number)

    if (negTack) reverse.unshift(negTack[0])

    return parseInt(reverse.join(""))

    // Alt solution
    // const reversed = n.toString().split("").reverse().join("")

    // return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
