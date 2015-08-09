const min = ([...it]) =>
    it.reduce((x, y) => x < y ? x : y);

export default min;
