const sum = ([...it], start = 0) =>
    it.reduce((x, y) => x + y, start);

export default sum;
