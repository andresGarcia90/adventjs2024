const isTreesSynchronized = require('./24-arbol-espejo')

test('Test: return type',() => {
    expect(
        Array.isArray(isTreesSynchronized({ value: '🎅' },{ value: '🧑‍🎄' })))
        .toBe(true)
})

test(`Test: isTreesSynchronized({ value: '🎄' },{ value: '🎄' })`, () => {
    expect(
        isTreesSynchronized({ value: '🎄' },{ value: '🎄' })
    ).toStrictEqual(
        [true,'🎄']
    )
})

test(`Test: isTreesSynchronized({
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
  },{
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '⭐' },
  })`, () => {
    expect(
        isTreesSynchronized({
            value: '🎄',
            left: { value: '⭐' },
            right: { value: '🎅' }
          },{
            value: '🎄',
            left: { value: '🎅' },
            right: { value: '⭐' },
        })
    ).toStrictEqual(
        [true,'🎄']
    )
})

test(`Test: isTreesSynchronized({
    value: '✨',
    left: { value: '⭐' },
    right: { value: '🎅' }
  },{
    value: '✨',
    left: { value: '🎅' },
    right: { value: '🎁' },
  })`, () => {
    expect(
        isTreesSynchronized({
            value: '✨',
            left: { value: '⭐' },
            right: { value: '🎅' }
          },{
            value: '✨',
            left: { value: '🎅' },
            right: { value: '🎁' },
          })
    ).toStrictEqual(
        [false,'✨']
    )
})

test(`Test: isTreesSynchronized({ value: '🎁' },{ value: '🎁' })`, () => {
    expect(
        isTreesSynchronized({ value: '🎁' },{ value: '🎁' })
    ).toStrictEqual(
        [true,'🎁']
    )
})

test(`Test: isTreesSynchronized({ value: '🎄' },{ value: '🎁' })`, () => {
    expect(
        isTreesSynchronized({ value: '🎄' },{ value: '🎁' })
    ).toStrictEqual(
        [false,'🎄']
    )
})

test(`Test: isTreesSynchronized({
    value: '🎄',
    left: { value: '⭐' }
  },{
    value: '🎄',
    right: { value: '⭐' },
  })`, () => {
    expect(
        isTreesSynchronized({
            value: '🎄',
            left: { value: '⭐' }
          },{
            value: '🎄',
            right: { value: '⭐' },
          })
    ).toStrictEqual(
        [true,'🎄']
    )
})