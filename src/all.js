const all = it => {
    for (let v of it)
        if (v == null) return false;
    return true;
};

export default all;
