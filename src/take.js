const take = function* (n, it) {
    let i = 0;
    for (let v of it) {
        if (++i > n) break;
        yield v;
    }
};

export default take;
