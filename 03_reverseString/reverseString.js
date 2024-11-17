const reverseString = function(string) {
    reversedstring = ''


    for (let i = string.length-1; i > -1; i--) {
        reversedstring += string[i]  
    };

    return reversedstring
};

// Do not edit below this line
module.exports = reverseString;
