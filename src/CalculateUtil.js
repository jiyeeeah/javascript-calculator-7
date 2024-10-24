import BASIC_SEPARATOR from "./constants/basicSeparator";

const CalculateUtil = {
  parseInput(input) {
    const customSeparatorRegExp = /(\/\/).+(\\n)/;

    if (input.match(customSeparatorRegExp)) {
      const customSeparators = input.substring(2, input.indexOf("\\")).split("");
      const separator = [...customSeparators, ...BASIC_SEPARATOR];

      const findNumberIndex = input.search(/[0-9]/);
      const expression = input.substring(findNumberIndex);

      return { separator, expression };
    }

    return { separator: [...BASIC_SEPARATOR], expression: input };
  },

  sumExpression(separator, expression) {
    const regex = new RegExp(`${separator.join("|")}`, "g");
    const numbers = expression.split(regex);
    return numbers.reduce((acc, numString) => acc + Number(numString.trim()), 0);
  },
};

export default CalculateUtil;
