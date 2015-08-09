import iter from './iter';
import map from './map';
import any from './any';

const zip = function* (...iterators) {
    const its = iterators.map(iter);
    let results;
    while (true) {
        results = its.map(it => it.next());
        if (any(map(r => r.done, results))) break;
        yield results.map(r => r.value);
    }
};

export default zip;
