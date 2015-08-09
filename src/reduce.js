const reduce = (fn, [...it], init) =>
    arguments.length < 3 ? it.reduce(fn) : it.reduce(fn, init);

export default reduce;
