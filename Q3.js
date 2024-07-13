function flattenArray(nestedArray) {
    let flattened = [];
    function flatten(element) {
        if (Array.isArray(element)) {
            for (let item of element) {
                flatten(item);
            }
        } else {
            flattened.push(element);
        }
    }
    flatten(nestedArray);
    return flattened;
}
console.log(flattenArray([1, [2, [3, [4, 5]], 6], 7])); 
console.log(flattenArray([[1, 2, [3]], 4, [5, 6], 7, [8, [9]]]));
