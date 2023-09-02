function fibs(n) {
    let array = [0, 1]
    while (array.length < n) {
        array.push(array[array.length - 1] + array[array.length - 2])
    }
    return array;
}
console.log(fibs(8));

/**
 * Generate the Fibonacci sequence using recursion.
 * @param {number} n - The number of Fibonacci numbers to generate.
 * @returns {number[]} - An array of Fibonacci numbers.
 */
function fibsRec(n) {
    // Base case: Return the first two numbers of the sequence
    if (n == 2) {
        return [0, 1];
    }

    // Recursive case: Generate the previous Fibonacci numbers
    let array = fibsRec(n - 1);

    // Calculate the current Fibonacci number and add it to the array
    array.push(array[array.length - 1] + array[array.length - 2])

    // Return the array of Fibonacci numbers
    return array;
}
console.log("recursive:", fibsRec(8));