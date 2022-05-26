const capitalize = str => {
  const letter = str.charAt(0).toUpperCase();
  const capitalizedStr = str.replace(str.charAt(0), letter);
  return capitalizedStr;
};

module.exports = capitalize;