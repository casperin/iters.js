const reverse = function* ([...it]) {
    let i = it.length;
    while (i--)
        yield it[i];
};

export default reverse;
