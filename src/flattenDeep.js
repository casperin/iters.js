const flattenDeep = function* (it) {
    if (it[Symbol.iterator])
        for (let v of it) yield * flattenDeep(v);
    else
        yield it;
};

export default flattenDeep;

