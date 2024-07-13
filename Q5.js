function removeDuplicates(arr) {
    return [...new Set(arr)];
}
const exampleArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(exampleArray);
console.log("Original array:", exampleArray);
console.log("Array with duplicates removed:", uniqueArray);
