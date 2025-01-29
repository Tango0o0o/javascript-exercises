const sumAll = function(x, y) { // x to be smaller y to be bigger
    let temp = 0

    if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
    if (x < 0 || y < 0) return "ERROR";

    if (y > x) {
        temp = x
        x = y
        y = temp
        temp = 0
    };
     
    for (let index = y; index <= x; index++) {
        temp += index
    }

    return temp
};

// Do not edit below this line
module.exports = sumAll;
