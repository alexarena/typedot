function exists(val){
  return (val !== null && val !== undefined)
}

module.exports = {
  isString: (tmp)=>{ return typeof tmp === 'string' },
  isInt: (tmp)=>{ return (!isNaN(+(tmp)) && Number.isInteger(+(tmp))) && exists(tmp)},
  isObject: (tmp)=>{ return typeof tmp === 'object' && exists(tmp) },
  isChar: (tmp)=>{ return typeof tmp === 'string' && tmp.length === 1 }
}
