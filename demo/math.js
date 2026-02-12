function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiply(x, y) {
    return x * y;
}

function division(p, q) {
    if (q != 0) {
        return p / q;
    }
    return ' invalid q value';
}

export { multiply };
export default subtraction;
