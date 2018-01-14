import {capitalize} from './hw2'

describe("hw2", () => {
  it("should return correct answer when str = nick", () => {
    expect(capitalize('nick')).toBe('Nick')
  })
})