## A Proof of Concept

I've been playing around with JS to try and find the most elegant way to do type checking through Express middleware.

I like this format, but its farrr from something that you should use.

## An Example

Take this route in Express:

```
app.get('/:id',function(req,res){
  return res.sendStatus(200)
})
```

If you want to assert that `req.params.id` should be an integer, you'd add `type.int('params.id')` as middleware.

Here's what the resulting route would look like:

```
app.get('/:id',type.int('params.something.id'),function(req,res){
  return res.sendStatus(200)
})
```

## Moving Forward

Here's what I'd like to add soon-ish:
- More types to check
- Tests
- Support for custom types
- Documentation
- Published examples
