const execute = require('./25-ejecuta-el-lenguaje')

test('Test: return type',() => {
    expect(
        Number.isNaN(execute('+++')))
        .toBe(false)
})

test("Test: execute(`+++`)",() => {
    expect(
        execute(`+++`)
    ).toBe(3)
})

test("Test: execute(`+--`)",() => {
    expect(
        execute(`+--`)
    ).toBe(-1)
})

test("Test: execute(`>+++[-]`)",() => {
    expect(
        execute(`>+++[-]`)
    ).toBe(0)
})

test("Test: execute(`>>>+{++}`)",() => {
    expect(
        execute(`>>>+{++}`)
    ).toBe(3)
})

test("Test: execute(`+{[-]+}`)",() => {
    expect(
        execute(`+{[-]+}`)
    ).toBe(1)
})

test("Test: execute(`-[+>]++`)",() => {
    expect(
        execute(`-[+>]++`)
    ).toBe(2)
})

test("Test: execute(`-[+{++}]++{[-]}++`)",() => {
    expect(
        execute(`-[+{++}]++{[-]}++`)
    ).toBe(2)
})

test("Test: execute(`{+}{+}{+}`)",() => {
    expect(
        execute(`{+}{+}{+}`)
    ).toBe(0)
})

test("Test: execute(``)",() => {
    expect(
        execute(``)
    ).toBe(0)
})

test("Test: execute(`+++{[-]+++[-]+}`) // ",() => {
    expect(
        execute(`+++{[-]+++[-]+}`)
    ).toBe(1)
})

test("Test: execute(`{>++>++}`)",() => {
    expect(
        execute(`{>++>++}`)
    ).toBe(0)
})

test("Test: execute(`++++[-->]>++`)",() => {
    expect(
        execute(`++++[-->]>++`)
    ).toBe(2)
})