const dropWhile = function* (fn, it) {
    let drop = true;
    for (let v of it) {
        if (drop)
            drop = fn(v);
        else
            yield v;
    }
};

export default dropWhile;
