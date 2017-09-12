function exists(val){
  return (val !== null && val !== undefined)
}

module.exports = {
  isString: (tmp) => { return typeof tmp === 'string' },
  isInt: (tmp) => { return (!isNaN(+(tmp)) && Number.isInteger(+(tmp))) && exists(tmp)},
  isObject: (tmp) => { return typeof tmp === 'object' },
  isChar: (tmp) => { return typeof tmp === 'string' }
}
