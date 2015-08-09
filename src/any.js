const any = it => {
    for (let v of it)
        if (v !== false && v != null) return true;
    return false;
};

export default any;
