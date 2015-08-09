# iters.js

A bunch of functions that works on iterables. Iterables are pretty neat, because they expose a
similar interface to the world, so each of these functions will work on arrays, strings, sets, maps,
and whatever comes out of generators (if you find a function that doesn't, please let me know!).

No tests and no documentation, yet. Sorry. For the most part, each function should do what you
expect it to do though.

The code is written in an expressive manner. No types, often leaving out curly brackets, etc. In
fact, it brevity was one of the goals for me when writing this (the other was to learn how to deal
with iterables).

## Halp!

Notice that some functions can handle infinite iterables, while others can't (your computer will
blow up!). Here are some examples:

```javascript
// This creates an infinite iterator, giving values from 0 to infinity
const infiniteIterator = range(Infinity);

// You can call map on an infinite interator
const infinitePlusThree = map(x => x + 3, range(Infinity));

// Or filter...
const onlyEven = filter(x => x % 2 === 0, range(Infinity));

// But not reduce!
const veryBigNumber = reduce((x, y) => x + y, range(Infinity)); // Don't do this!
```

The reason it is not okay to `reduce` over an infinite iterator is that `reduce` by definition runs
until the end of the iterator. The others do not. They are not returning arrays, they are returning
iterators (in this case infinite iterators).

`all` also will not work on infinite iterators, but `any` might (if it eventually finds what it is
searching for).


