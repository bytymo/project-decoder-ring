const alphabet = "abcdefghijklmnopqrstuvwxyz"

function getCol(letter){
    // Get the index value of the letter
    let letterVal = alphabet.indexOf(letter)
    // For letters "j" and "k", subtract the index value by one, so "i" and "j" are the same value, and k takes "j"'s value, keeping to the grid

    if(letter === "j" || letter === "k"){
    letterVal--
  }

  // If the letter's index value is less than or equal to ten, take the modulus of five and add by 1. For index values above ten, check if the the modulus of five equals zero, if so change to five, otherwise return the modulus of five.
  let col = letterVal <= 10 ? (letterVal%5 + 1) : (letterVal%5 === 0 ? 5 : letterVal%5)

  return col
}

function getRow(letter){
    // Get the index value of the letter
    const letterVal = alphabet.indexOf(letter)

    // Using the letter's index value, check if the modulus of five is zero, if so return the rounded down quotient of five, otherwise if there is a remainder, add one to the quotient
    let row = letterVal%5 === 0 ? Math.floor(letterVal/5) : Math.floor(letterVal/5) + 1
    if(letterVal === 0 || letterVal === 5) row += 1
    return row
}

function getNum(letter){
    const col = getCol(letter)
    const row = getRow(letter)
    return num = `${col}${row}`
}


function polybius(input, encode = true) {
    // Create a "input" variable to convert all letters in the input to lowercase; and an alphabet object
    input = input.toLowerCase()

    // create an empty variable for the resulting input
    let result = ""
    if(encode){
        // If the message is being encoded, check each character in the input. If the character is a space, return a space, otherwise return the two-digit code for the letter
        for(characters in input) {
            let character = input[characters]
            result+= character === " " ? character : getNum(character)
        }
    }
    else{
        // If the message is being decoded, create an array of the encrypted numbers
        const encryptionArray = input.split(" ")

        for(numbers in encryptionArray){
            // Get each encrypted word
            let word = encryptionArray[numbers]
            // Figure out if this word is the last word in the array
            const lastWord = encryptionArray[encryptionArray.length - 1]
            // Create a variable to add a space between words
            const addSpace = word != lastWord ? true : false

            // If the encrypted word has an odd number of numbers, return false and end the evaluation
            if(word.length%2 != 0){
                result = false
                break
            }
            
            // While the word hasn't been completely dissolved, isolate the first two numbers, if the numbers equal 42, return i/j, otherwise go through the alphabet and find out which letter it relates to. Delete this number pairing after solving and add the letter to the resulting string
            while(word.length > 0){
                let wordSection = word.substr(0,2)
                if (wordSection == 42) {
                    result += "(i/j)"
                    word = word.slice(2)
                    continue
                }

                for(letters in alphabet){
                    // Sort through each letter in the alphabet, obtain its 2-digit code, and compare
                    let letter = getNum(alphabet[letters])

                    // Once a match is found, add the letter to the resulting
                    if(letter == wordSection) result += alphabet[letters]
                    
                }
                word = word.slice(2)
            }
            // If the decrypted word was not the last word in the array, add a space
            if(addSpace) result += " "
        }
    }
    return result
}

module.exports = polybius;