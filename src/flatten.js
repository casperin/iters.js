const flatten = function* (it) {
    for (let v of it)
        yield* v;
};

export default flatten;

