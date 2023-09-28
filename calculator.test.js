const add = require('./calculator')

test("Add two numbers", ()=>{
    expect(add(1,2)).toBe(3)
    expect(add(-1,2)).toBe(1)
    expect(add(0,0)).toBe(10)
})