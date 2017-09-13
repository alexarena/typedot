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

  expect(tc.isInt('1.0')).toBe(true)
  expect(tc.isInt(1.0)).toBe(true)

  expect(tc.isInt(1.1)).toBe(false)

  expect(tc.isInt('something')).toBe(false)
  expect(tc.isInt('true')).toBe(false)
  expect(tc.isInt({not:'anInt'})).toBe(false)

  expect(tc.isInt()).toBe(false)
  expect(tc.isInt(null)).toBe(false)
  expect(tc.isInt(undefined)).toBe(false)
})

test('isObject()', () => {
  expect(tc.isObject({is:'anObject'})).toBe(true)

  const obj = {}
  obj[0] = 'something'

  expect(tc.isObject(obj)).toBe(true)

  obj.something = {}
  obj.something[0] = 'something else'

  expect(tc.isObject(obj.something)).toBe(true)


  expect(tc.isObject(1)).toBe(false)
  expect(tc.isObject('1')).toBe(false)
  expect(tc.isObject(1.0)).toBe(false)

  expect(tc.isObject(1.1)).toBe(false)

  expect(tc.isObject('something')).toBe(false)
  expect(tc.isObject('true')).toBe(false)

  expect(tc.isObject()).toBe(false)
  expect(tc.isObject(null)).toBe(false)
  expect(tc.isObject(undefined)).toBe(false)
})

test('isChar()', () => {
  expect(tc.isChar('1')).toBe(true)
  expect(tc.isChar('.')).toBe(true)

  expect(tc.isChar('true')).toBe(false)
  expect(tc.isChar('something')).toBe(false)

  expect(tc.isChar(false)).toBe(false)
  expect(tc.isChar({not:'aString'})).toBe(false)
  expect(tc.isChar(1)).toBe(false)

  expect(tc.isChar()).toBe(false)
  expect(tc.isChar(null)).toBe(false)
  expect(tc.isChar(undefined)).toBe(false)
})
