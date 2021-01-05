function caesar(input, shift = 0, encode = true){
    input = input.toLowerCase()
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    let result = ""
    let newIndex = 0

    // If the shift integer is zero, greater than 25, or less than -25, return false
    if(shift === 0 || shift < -25 || shift > 25){
        return false
    }
    
    for(characters in input){
        character = input[characters]

        // If the character is not a letter (index = -1), add character to result
        if(alphabet.indexOf(character) === -1) {
            result += character
            continue 
        }    

        alphabet.find(letter =>{
            if(letter === character){
                //add or subtract shift amount to alphabet leter's index number, assign value to newIndex
                encode ? newIndex = alphabet.indexOf(letter) + shift : newIndex = alphabet.indexOf(letter) - shift

                if(newIndex >= 26){
                    newIndex -= 26
                } else if(newIndex <= -1){
                    newIndex += 26
                }
                result += alphabet[newIndex]
            }
        })
    }
    // Return the resulting array
    return result
}

module.exports = caesar;