const reject = function* (fn, it) {
    for (let v of it)
        if (!fn(v)) yield v;
};

export default reject;
