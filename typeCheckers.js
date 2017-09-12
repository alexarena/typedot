module.exports = {
  isString: (tmp) => { return typeof tmp === 'string' },
  isInt: (tmp) => { return !isNaN(tmp) },
  isObject: (tmp) => { return typeof tmp === 'object' },
  isChar: (tmp) => { return typeof tmp === 'string' }
}
