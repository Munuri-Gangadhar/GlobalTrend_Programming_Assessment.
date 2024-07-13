function filterEvenNumbers(arr) {
    let oddNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num % 2 !== 0) {
            oddNumbers.push(num);
        }
    }

    return oddNumbers;
}

let numbers = [1, 2, 3, 4, 5, 6];
let oddNumbers = filterEvenNumbers(numbers);
console.log("Original Array:", numbers);
console.log("Odd Numbers:", oddNumbers);
