const takeWhile = function* (fn, it) {
    for (let v of it) {
        if (fn(v)) break;
        yield v;
    }
};

export default takeWhile;
