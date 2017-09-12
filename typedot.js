const tc = require('./typeCheckers')

// takes a string like 'params.something.id' and returns the var with the key 'id'
const getValue = (req,str)=>{
  arr = str.split('.')
  for(let i=0; i<arr.length-1; i++){
    let val = arr[i]
    let tmp = req[val]

    if(typeof tmp === 'object'){
      req = tmp
    }
    else{
      return tmp
    }
  }

  return req[arr[arr.length-1]]
}

const defaultErrorHandler = {
  message:()=>{
    return 'Error!'
  },
  code: 500,
  onError:(req,res,varName,expectedType)=>{
    res.status(defaultErrorHandler.code).send(defaultErrorHandler.message(varName,expectedType))
  }
}

const typeFunc = (varName,validator,name)=>{
    return (req,res,next)=>{
      const val = getValue(req,varName)
      validator(val) ? next() : type.error.onError(req,res,varName,name)
    }
}

const type = {

  error: defaultErrorHandler,

  string: (varName) => typeFunc(varName,tc.isString,'String'),
  int: (varName) => typeFunc(varName,tc.isInt,'Integer'),
  object: (varName) => typeFunc(varName,tc.isObject,'Object'),
  char: (varName) => typeFunc(varName,tc.isChar,'Character')
}

if(process.env.TYPEDOT_UNIT_TESTING){
  type.getValue = getValue
}

module.exports = type
