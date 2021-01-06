const expect = require("chai").expect
const polybius = require("../src/polybius")

describe("polybius()", () => {
    it("Should encode the message successfully", () => {
        const expected = "4432423352125413"
        const actual = polybius("Thinkful")
        expect(actual).to.equal(expected)
    })

    it("When encoding, your output should still be a string", () => {
        const actual = polybius("Thinkful")
        expect(actual).to.be.a("string")
    })
    
    it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false", () => {
        const actual = polybius("44324233521254134", false)
        expect(actual).to.be.false

        const altActual = polybius("44324233521254134 2543241341", false)
        expect(altActual).to.be.false
    })

    it("Spaces should be maintained throughout", () => {
        const expected = '3251131343 2543241341'
        const actual = polybius("hello world")
        expect(actual).to.equal(expected)

        const altExpected = "hello world"
        const altActual = polybius('3251131343 2543241341', false)
        expect(altActual).to.equal(altExpected)
    })

    it("Capital letters can be ignored", () => {
        const expected = '3251131343 2543241341'
        const actual = polybius("Hello world")
        expect(actual).to.equal(expected)
    })

    it("The letters \"I\" and \"J\" share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown", () => {
        const expected = "th(i/j)nkful"
        const actual = polybius("4432423352125413", false)
        expect(actual).to.equal(expected)
    })

    it("*Extra* Input parameter must be a string. Otherwise, it should return false", () => {
        const actual = polybius("th1nkful")
        expect(actual).to.be.a('string')
    })
})