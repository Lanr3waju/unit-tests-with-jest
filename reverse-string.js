const reverseString = (str) => {
  if (typeof str === "string") {
    let newStr = str.split("").reverse().join("");
    return newStr;
  } else {
      return undefined;
  }
};

module.exports = reverseString;
