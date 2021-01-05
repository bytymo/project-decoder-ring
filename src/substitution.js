function substitution(input, alphabet, encode = true) {
    const trueAlphabet = "abcdefghijklmnopqrstuvwxyz"
    input = input.toLowerCase()
    let result = ""

    const checkAlphabet = []
    for(letters in alphabet){
        checkAlphabet.push(alphabet[letters])
    }
    let alphabetHasDuplicate = checkAlphabet.some((letter, arrayBank) => checkAlphabet.indexOf(letter) !== arrayBank)

    let alphabetisAllLetters = checkAlphabet.every(character => trueAlphabet.includes(character))

    if(alphabet.length != 26 || alphabetHasDuplicate || !alphabetisAllLetters) {
        return false
    }

    for(characters in input){
        const character = input[characters]
        const codeValue = alphabet.indexOf(character)
        const trueValue = trueAlphabet.indexOf(character)

        // If the character is a non-letter, return the character
        if(alphabet.indexOf(character) === -1){
            result += character
            continue
        } 

        // If the character is being encoded, submit the decoded alphabet's letter for the same index of true alphabet, otherwise submit the true alphabet's letter for the same index of the encrypted alphabet
        result += encode ? alphabet[trueValue] : trueAlphabet[codeValue]
    }
    return result
}

module.exports = substitution;