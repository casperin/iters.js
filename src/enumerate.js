const enumerate = function* (it, start = 0) {
    for (let v of it)
        yield [start++, v];
};

export default enumerate;
