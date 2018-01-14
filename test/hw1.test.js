import {add} from '../hw/hw1'

describe("hw1", () => {
  it("should return 2", () => {
    expect(add(1, 1)).toBe(2)
  })

  it("should return 3", () => {
    expect(add(1, 2)).toBe(3)
  })
})