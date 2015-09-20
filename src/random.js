import range from './range';

const random = function* (min, max, size = Infinity) {
    if (arguments.length < 2) {
        max = min;
        min = 0;
    }

    if (min > max)
        [min, max] = [max, min];

    const scale = max - min - 1,
        shift = min;

    for (const _ of range(size))
        yield Math.round(Math.random() * scale + shift);
};

export default random;
