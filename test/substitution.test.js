const expect = require("chai").expect
const substitution = require("../src/substitution")

describe("substitution()", () => {
    it("Spaces should be maintained throughout", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const expected = 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.equal(expected)
    })

    it("Capital letters can be ignored", () => {
        const actual = substitution("ThInkFUL", "xoyqmcgrukswaflnthdjpzibev")
        const expected = 'jrufscpw'
        expect(actual).to.equal(expected)
    })

    it("The alphabet parameter must be string of exactly 26 characters. Otherwise, it should return false", () => {
        const actual = substitution("thinkful", "short")
        expect(actual).to.be.false
    })

    it("All of the characters in the alphabet parameter must be unique. Otherwise, it should return false", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        expect(actual).to.be.false
    })

    it("*Extra* All of the characters in the alphabet parameter must be letters. Otherwise, it should return false", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswa1lnthdjpzibev")
        expect(actual).to.be.false
    })
})