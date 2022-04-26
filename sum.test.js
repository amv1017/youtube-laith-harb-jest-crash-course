const sum = require("./sum")

describe("example tests", () => {

  it("should adds 1 + 2 to equal 3", () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  })

  it("object assignment", () => {
    const obj = {}
    expect(obj).toEqual({})
  })
  
})

describe("real or fake", () => {

  it("null", () => {
    const n = null
    // expect(n).toBeFalsy()
    // expect(n).not.toBeTruthy()
    expect(n).toBeNull()
  })

})

describe("numbers", () => {

  it("nine plus nine", () => {
    const value = 9 + 9
    expect(value).toBeGreaterThan(15)
    expect(value).toBeLessThanOrEqual(18)
  })

  it("adding floats", () => {
    const value = 0.1 + 0.2
    expect(value).toBeCloseTo(0.3)
  })

})

describe("strings", () => {

  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/)
  })

})

describe("arrays", () => {

  it("element in array", () => {
    const shoppingList = ['toothpaste', 'soap', 'nuts', 'olive oil', 'sunflower seeds']
    expect(shoppingList).toContain('olive oil')
  })

})

function compileAndroidCode() {
  throw new Error("You are using wrong JDK")
}

describe("exceptions", () => {

  it("compiling android goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow("You are using wrong JDK")
  })

})
