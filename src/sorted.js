const sub = (x, y) => x - y;
const sorted = ([...it], fn = sub) =>
    it.sort(fn);

export default sorted;
