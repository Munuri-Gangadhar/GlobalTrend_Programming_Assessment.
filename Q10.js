function toTitleCase(str) {
    let words = str.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
}

let sentence = "hello world! this is a test sentence.";
let titleCaseSentence = toTitleCase(sentence);
console.log(titleCaseSentence);
