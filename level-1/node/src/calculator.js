function add(a, b) {
    let sum = 0;

    for (let i=0; i<a; i++) {
        sum++;
    }
    for (let i=0; i<b; i++) {
        sum++;
    }

    return sum;
}

module.exports.add = add;