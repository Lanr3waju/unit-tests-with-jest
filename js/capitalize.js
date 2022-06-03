const capitalize = () => {
  const checkStringCapitalization = (originalInput, capitalizedInput) => {
    if (originalInput === capitalizedInput) {
      return true;
    }
    return false;
  };
  const capitalizeStr = str => {
    if (typeof str === 'string') {
      const inpString = str;
      const capitalChar = inpString.charAt(0).toUpperCase();
      const firstChar = inpString.charAt(0);
      const capitalizedStr = inpString.replace(firstChar, capitalChar);

      if (!checkStringCapitalization(inpString, capitalizedStr)) {
        return capitalizedStr;
      }
      return false;
    }
    return undefined;
  };

  return {
    checkStringCapitalization,
    capitalizeStr,
  };
};

module.exports = capitalize;
