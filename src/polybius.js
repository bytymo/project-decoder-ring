// const alphabet = "abcdefghijklmnopqrstuvwxyz"

// function getCol(letter){
//     let letterVal = alphabet.indexOf(letter)

//     if(letter === "j" || letter === "k"){
//     letterVal--
//   }

//   // If the letter's index value is less than or equal to ten, take the modulus of five and add by 1. For index values above ten, check if the the modulus of five equals zero, if so change to five, otherwise return the modulus of five.
//   let col = 0
  
//   if (letterVal <= 10){
//     col = letterVal%5 + 1
//   }else {
//     if(letterVal%5 === 0){
//         col = 5
//     }else {
//         col = letterVal%5
//     }
//   }

//   return col
// }

// function getRow(letter){
//     const letterVal = alphabet.indexOf(letter)

//     // Using the letter's index value, check if the modulus of five is zero, if so return the rounded down quotient of five, otherwise if there is a remainder, add one to the quotient
//     let row = 0
    
//     if(letterVal%5 === 0){
//         row = Math.floor(letterVal/5)
//     } else{
//         row = Math.floor(letterVal/5) + 1
//     } 
    
//     if(letterVal === 0 || letterVal === 5) row += 1

//     return row
// }

// function getNum(letter){
//     const col = getCol(letter)
//     const row = getRow(letter)
//     return num = `${col}${row}`
// }


// function polybius(input, encode = true) {
//     input = input.toLowerCase()

//     const checkInput = []
//     for(letters in input){
//      checkInput.push(input[letters])
// }
//     let inputisAllLetters = input.every(character => alphabet.includes(character))

//     if(!inputisAllLetters) return result = false

//     let result = ""
//     if(encode){
//         // If the message is being encoded, check each character in the input. If the character is a space, return a space, otherwise return the two-digit code for the letter
//         for(characters in input) {
//             let character = input[characters]
//             result+= character === " " ? character : getNum(character)
//         }
//     }
//     else{
//         // If the message is being decoded, create an array of the encrypted numbers
//         const encryptionArray = input.split(" ")

//         for(numbers in encryptionArray){
//             let word = encryptionArray[numbers]

//             const lastWord = encryptionArray[encryptionArray.length - 1]
//             // Create a variable to add a space between words
//             const addSpace = word != lastWord ? true : false

//             // If the encrypted word has an odd number of numbers, return false and end the evaluation
//             if(word.length%2 != 0){
//                 result = false
//                 break
//             }
            
//             // While the word hasn't been completely dissolved, isolate the first two numbers, if the numbers equal 42, return i/j, otherwise go through the alphabet and find out which letter it relates to. Delete this number pairing after solving and add the letter to the resulting string
//             while(word.length > 0){
//                 let wordSection = word.substr(0,2)
//                 if (wordSection == 42) {
//                     result += "(i/j)"
//                     word = word.slice(2)
//                     continue
//                 }

//                 for(letters in alphabet){
//                     let letter = getNum(alphabet[letters])

//                     if(letter == wordSection) result += alphabet[letters]
                    
//                 }
//                 word = word.slice(2)
//             }
//             if(addSpace) result += " "
//         }
//     }
//     return result
// }

function polybius(input, encode = true) {
    const alphabet = {
        11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e',
        12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k',
        13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p',
        14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u',
        15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z'
    }
    input = input.toLowerCase()
    let result = ""

    if(typeof input !== "string") return result = false

    if(encode){
        for(characters in input){
            const character = input[characters]
            if(character === " "){
                result += character
                continue
            }
            if(character === "i" || character === "j"){
                result += 42
                continue
            }
            for(letters in alphabet){
                if(character === alphabet[letters]) result += letters
            }
        }
    } else {
        for(numbers in input){
            let checkIfEven = input.split(" ")
            for(word in checkIfEven){
                if(checkIfEven[word].length%2 != 0){
                    return result = false
                } 
            }
            
            const pair = `${input[0]}${input[1]}`

            if(input[0] === " "){
                result += input[0]
                input = input.slice(1)
                continue
            }

            for(values in alphabet){
                if (pair === values){
                    result += alphabet[values]
                }
            }
            input = input.slice(2)
        }
    }
    return result
}

module.exports = polybius;