const reverseString = str => {
    let newStr = str.split('').reverse().join('');
    return newStr;
};

module.exports = reverseString;