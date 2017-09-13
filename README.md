## A Proof of Concept

I've been playing around with JS to try and find the most elegant way to do type checking through Express middleware.

I like this format, but its farrr from something that you should use.

## An Example

Take this route in Express:

```js
app.get('/:id',function(req,res){
  return res.sendStatus(200)
})
```

If you want to assert that `req.params.id` should be an integer, you'd add `type.int('params.id')` as middleware.

Here's what the resulting route would look like:

```js
app.get('/:id',type.int('params.something.id'),function(req,res){
  return res.sendStatus(200)
})
```

## Built-In Types
Out of the box, Typedot supports these types:
- Integer: `type.int(someVar)`
- String: `type.string(someVar)`
- Object: `type.object(someVar)`
- Char: `type.char(someVar)`

Because Express (and HTTP, for that matter) treats params, query strings, et. al as strings, the type checking done by Typedot involves heavy type casting. *If it can logically be cast to the expected type, Typedot will try to make that happen.*

In practice:

```js
type.int('1') // true
type.int(1) // true
type.int(1.0) //true
```

If you need stricter checks for a specific type, I'll be adding custom types soon enough.

## On Browser Support & Reserved Words

You may have noticed that the API for Typedot *feels* like it shouldn't work. Aren't `int`, `string`, etc. reserved words? Weirdly, no! As of ES 5/6, a bunch of reserved words in traditional C-derived languages are freed in JS. But this is still JS, and as such, you should have no expectation that this won't cause problems in different environments.

So *don't use Typedot in the browser*. In fact, I haven't tested it on any Node version <8.2.0 so you should probably be using Node 8 just to be safe.

Why would you want to use an Express type-checking middleware library in the browser? I have no idea. What I do know, is that you shouldn't.

## Tests

Tests, like the module itself, are a work in progress. You can run them with `npm test`.

## Moving Forward

Here's what I'd like to add soon-ish:
- More types to check
- Support for custom types
- Better Documentation
- Published examples
- Type conversion
