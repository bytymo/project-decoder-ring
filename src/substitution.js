function substitution(input, alphabet, encode = true) {

    if(!alphabet || alphabet.length !== 26) return false;
    const trueAlphabet = "abcdefghijklmnopqrstuvwxyz"
    input = input.toLowerCase()
    let result = ""
    
    const checkAlphabet = []
    for(letters in alphabet){
        checkAlphabet.push(alphabet[letters])
    }
    let alphabetHasDuplicate = checkAlphabet.some((letter, arrayBank) => checkAlphabet.indexOf(letter) !== arrayBank)
    // If the alphabet parameter has duplicate values, return false

    if(alphabetHasDuplicate) {
        return false
    }
    // For each character in the input
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