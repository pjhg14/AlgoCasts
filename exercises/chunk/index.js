// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const control = [...array]
    const chunks = []

    // Create full size arrays
    for (let x = 0; x < array.length / size; x++) {
        // console.log({x})
        chunks.push(control.splice(0, size))
    }

    // join full size sub arrays + remaining elements if any
    if (control.length > 0) chunks.push(control)

    return chunks
}

// alternate chunk (shown in video)
function chunk2(array, size) {
    const chunks = []
    let index = 0

    while (index < array.length) {
        chunks.push(array.slice(index, index + size))
        index += size
    }

    return chunks
}

// const test = chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)
// console.log({test})

// const test1 = chunk([1, 2, 3, 4], 2)
// const test1 = chunk2([1, 2, 3, 4, 5], 10)
// const test2 = chunk([1, 2, 3, 4, 5], 2)
// const test3 = chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
// const test4 = chunk([1, 2, 3, 4, 5], 4)
// const test5 = chunk([1, 2, 3, 4, 5], 10)

console.log({test1})
// console.log({test2})
// console.log({test3})
// console.log({test4})
// console.log({test5})

module.exports = chunk;
