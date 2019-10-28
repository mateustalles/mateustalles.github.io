function longestWord (string) {
    let numberOfLettersArray = string.split(" ").map(item => item.length)
    let maxLetters = Math.max(...numberOfLettersArray);
    return string.split(" ")[numberOfLettersArray.indexOf(maxLetters)]
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'
