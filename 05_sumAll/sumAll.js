const sumAll = function(x, y) {
    n = y

    if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
    if (x < 0 || y < 0) return "ERROR";

    if (x > y) {
        while (n > y) {
            n += x
            x-=1
        }
    } else {
        while (n > x) {
            n += y
            x-=1
        }
    }
     

    return n
};

// Do not edit below this line
module.exports = sumAll;
