const repeatString = function(string, num) {
    repeated_string = '';
    if (num < 0) {
        return 'ERROR'
    };
    for (let i = 0; i < num; i++) {
        repeated_string += string
    };
    return repeated_string;
};

// Do not edit below this line
module.exports = repeatString;
