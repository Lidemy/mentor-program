import {isPalindromes} from './hw4'

describe("hw4", () => {
  it("should return correct answer when str = abcdcba", () => {
    expect(isPalindromes('abcdcba')).toBe(true)
  })
})