const find = (fn, it) => {
    for (let v of it)
        if (fn(v)) return v;
};

export default find;
