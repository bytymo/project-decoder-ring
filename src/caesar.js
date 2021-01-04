function caesar(input, shift = 0, encode = true) {
    // Create a "input" variable to convert all letters in the input to lowercase; and an alphabet array
    input = input.toLowerCase()
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    // create a mutatable variable for the resulting input and a temp variable for the index locator
    let result = ""
    let newIndex = 0

    // If the shift integer is zero, greater than 25, or less than -25, return false
    if(shift === 0 || shift < -25 || shift > 25)  {
        return false
    }
    
    // Check every character in the input
    for (characters in input) {
        character = input[characters]
        // ...and compare each character in the input to a letter in the alphabet array
        alphabet.find(letter => {
            if (letter === character) {
                //add or subtract shift amount to alphabet leter's index number, assign value to newIndex
                encode ? newIndex = alphabet.indexOf(letter) + shift : newIndex = alphabet.indexOf(letter) - shift
                // if the newIndex value is 26 or above, subtract that value by 26, otherwise if the newIndex value is negative, add 26
                if(newIndex >= 26) {
                    newIndex -= 26
                } else if(newIndex <= -1) {
                    newIndex += 26
                }
                // add the (de)cyphered letter to the resulting string
                result += alphabet[newIndex]
            }
        })
        // If the character is not a letter (index = -1), add character to result
        if(alphabet.indexOf(character) === -1) result += character
    }
    // Return the resulting array
    return result
}

module.exports = caesar;