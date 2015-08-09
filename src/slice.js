import drop from './drop';
import take from './take';

const slice = (n, m, it) => take(m-n, drop(n, it));

export default slice;
