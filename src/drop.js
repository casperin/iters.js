const drop = function* (n, it) {
    let i = 0;
    for (let v of it) {
        if (i++ < n) continue;
        yield v;
    }
};

export default drop;
