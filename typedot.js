const tc = require('./typeCheckers')

function getValue(req,str){
  arr = str.split('.')
  for(let i=0; i<arr.length -1; i++){
    let val = arr[i]
    let tmp = req[val]

    if(typeof tmp === 'object'){
      req = tmp
    }
    else{
      return tmp
    }
  }
  let val = req[arr[arr.length-1]]
  return val
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

let typeFunc = (varName,validator,name) =>{
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

module.exports = type
