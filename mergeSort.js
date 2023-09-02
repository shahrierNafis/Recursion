/**
 * Sorts an array using the merge sort algorithm.
 * 
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function mergeSort(array) {
    // Base case: if the array has only one element, return it
    if (array.length == 1) {
        return array;
    }

    // Divide the array into two halves
    let leftHalf = mergeSort(array.slice(0, (array.length / 2)));
    let rightHalf = mergeSort(array.slice(array.length / 2));

    // Clear the array
    array.length = 0;

    // Merge the two sorted halves into one sorted array
    while (leftHalf.length || rightHalf.length) {
        // If the left half is smaller or the right half is empty
        if (leftHalf[0] < rightHalf[0] || !rightHalf.length) {
            array.push(leftHalf[0]);
            leftHalf = leftHalf.slice(1);
        } else {
            // If the right half is smaller or the left half is empty
            array.push(rightHalf[0] || !leftHalf.length);
            rightHalf = rightHalf.slice(1);
        }
    }

    return array;
}
console.log(mergeSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
