const expect = require("chai").expect
const caesar = require("../src/caesar")

describe("caesar()", () => {
    it("Should return false if shift is less than 25, greater than -25, or equal to zero", () => {
        const actual = caesar("Thinkful")
        expect(actual).to.be.false
    })
    it("Spaces should be maintained throughout, as should other non-alphabetic symbols", () => {
        const expected = 'bpqa qa i amkzmb umaaiom!'
        const actual = caesar("This is a secret message!", 8)

        expect(actual).to.equal(expected)
    })
    it("Capital letters can be ignored", () => {
        const expected = 'wklqnixo'
        const actual = caesar("ThinKfUL", 3)

        expect(actual).to.equal(expected)
    })
    it("If a letter is shifted so that it goes \"off\" the alphabet (e.g. a shift of 3 on the letter \"z\"), it should wrap around to the front of the alphabet (e.g. \"z\" becomes \"c\")", () => {
        const expected = 'this is a secret message!'
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)

        expect(actual).to.equal(expected)
    })
})