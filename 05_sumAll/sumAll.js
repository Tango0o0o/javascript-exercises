const sumAll = function(x, y) {
    n = 0

    if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
    if (x < 0 || y < 0) return "ERROR";

    if (x < y) {
        for (let i = x; i < y+1; i++) {
            n+=i
            
        }
    } else {
        for (let i = y; i < x+1; i++) {
            n+=i
            
        }
    }
     

    return n
};

// Do not edit below this line
module.exports = sumAll;
