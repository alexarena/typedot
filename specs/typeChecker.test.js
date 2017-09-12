const tc = require('../typeCheckers')

test('isString()', () => {
  expect(tc.isString('something')).toBe(true)
  expect(tc.isString('1')).toBe(true)
  expect(tc.isString('true')).toBe(true)

  expect(tc.isString(false)).toBe(false)
  expect(tc.isString({not:'aString'})).toBe(false)
  expect(tc.isString(1)).toBe(false)

  expect(tc.isString()).toBe(false)
  expect(tc.isString(null)).toBe(false)
  expect(tc.isString(undefined)).toBe(false)
})

test('isInt()', () => {

  expect(tc.isInt(1)).toBe(true)
  expect(tc.isInt('1')).toBe(true)
  expect(tc.isInt(1.0)).toBe(true)

  expect(tc.isInt(1.1)).toBe(false)

  expect(tc.isInt('something')).toBe(false)
  expect(tc.isInt('true')).toBe(false)
  expect(tc.isInt({not:'anInt'})).toBe(false)

  expect(tc.isInt()).toBe(false)
  expect(tc.isInt(null)).toBe(false)
  expect(tc.isInt(undefined)).toBe(false)
})
