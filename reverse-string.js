const reverseString = (str) => {
  if (typeof str === 'string') {
    const newStr = str.split('').reverse().join('');
    return newStr;
  }
  return false;
};

module.exports = reverseString;
