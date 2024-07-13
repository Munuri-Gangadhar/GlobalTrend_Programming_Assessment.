function capitalizeFirstLetters(str) {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => {
        if (word === '') return word;
        return word[0].toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
}
