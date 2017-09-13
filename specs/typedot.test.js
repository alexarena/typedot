let type = require('../typedot.js')

test('getValue should exist', () => {
  let req = {params:{id:'1'}}
  expect(type.getValue(req,'params.id')).toBe('1')
})
