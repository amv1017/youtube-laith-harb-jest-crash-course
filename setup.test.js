let animals

beforeAll(() => {
  console.log('running before all tests')
})

beforeEach(() => {
  animals = ["elephant", "zebra", "bear", "tiger"]
})

afterEach(() => {
  console.log('running after each test')
})

afterAll(() => {
  console.log('running after all tests')
})

describe("animals array", () => {

  it("should add animal to the end of array", () => {
    animals.push("aligator")
    expect(animals[animals.length - 1]).toBe("aligator")
  })

  it("should add animal to the beginning of array", () => {
    animals.unshift("monkey")
    expect(animals[0]).toBe("monkey")
  })

  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4)
  })

})
