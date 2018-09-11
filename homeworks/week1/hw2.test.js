import {capitalize} from './hw2'

describe("hw2", () => {
  it("should return correct answer when str = nick", () => {
    expect(capitalize('nick')).toBe('Nick')
  })
  it("should return correct answer when str = Nick", () => {
    expect(capitalize('Nick')).toBe('Nick')
  })
  it("should return correct answer when str = ,hello", () => {
    expect(capitalize(',hello')).toBe(',hello')
  })
})