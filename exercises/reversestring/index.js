// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const revStr = []

    for (let x = str.length - 1; x >= 0; x--) {
        revStr.push(str[x])
    }

    return revStr.join("")

    // return str.split("").reverse().join("")
}

module.exports = reverse;
