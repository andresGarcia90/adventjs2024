const inBox = require('./06-regalo-dentro-de-la-caja')

test('Test: return type',() => {
    expect(typeof inBox([
            "###",
            "#*#",
            "###"
        ]))
        .toBe('boolean')
})

test(`Test: inBox([
        "###",
        "#*#",
        "###"
    ])`,() => {
    expect(inBox([
        "###",
        "#*#",
        "###"
    ])).toBeTruthy()
})

test(`Test: inBox([
        "#*#",
        "###",
        "###"
    ])`,() => {
    expect(inBox([
        "#*#",
        "###",
        "###"
    ])).toBeFalsy()
})

test(`Test: inBox([
        "###",
        "# #",
        "###"
    ])`,() => {
    expect(inBox([
        "###",
        "# #",
        "###"
    ])).toBeFalsy()
})

test(`Test: inBox([
        "####",
        "#* #",
        "#  #",
        "####",
    ])`,() => {
    expect(inBox([
        "####",
        "#* #",
        "#  #",
        "####",
    ])).toBeTruthy()
})

test(`Test: inBox([
        "####",
        "#  #",
        "# #*",
        "####",
    ])`,() => {
    expect(inBox([
        "####",
        "#  #",
        "# #*",
        "####",
    ])).toBeFalsy()
})

test(`Test: inBox([
        "#####",
        "#   #",
        "#   #",
        "#####",
    ])`,() => {
    expect(inBox([
        "#####",
        "#   #",
        "#   #",
        "#####",
    ])).toBeFalsy()
})

test(`Test: inBox([
        "#####",
        "#   #",
        "*#  #",
        "#####",
    ])`,() => {
    expect(inBox([
        "#####",
        "#   #",
        "*#  #",
        "#####",
    ])).toBeFalsy()
})

test(`Test: inBox([
        "##*##",
        "#   #",
        "#   #",
        "#####",
    ])`,() => {
    expect(inBox([
        "##*##",
        "#   #",
        "#   #",
        "#####",
    ])).toBeFalsy()
})

test(`Test: inBox([
        "####",
        "#  #",
        "##*#",
    ])`,() => {
    expect(inBox([
        "####",
        "#  #",
        "##*#",
    ])).toBeFalsy()
})

test(`Test: inBox([
        "###",
        "###",
        "#*#",
    ])`,() => {
    expect(inBox([
        "###",
        "###",
        "#*#",
    ])).toBeFalsy()
})