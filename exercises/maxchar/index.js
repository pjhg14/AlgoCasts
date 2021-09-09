// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const strArray = str.split("")
    const charMap = {}
    let max = 0
    let maxChar

    // // personal map
    strArray.forEach(char => {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    })

    // Alt map
    // for (const char of str) {
    //     charMap[char] = charMap[char] + 1 || 1
    // }
    
    // solution (came out to same as video)
    for (const char in charMap) {
        if (max < charMap[char]) {
            max = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

console.log(maxChar("abcccccccd"))
console.log(maxChar("apple 1231111"))

module.exports = maxChar;
