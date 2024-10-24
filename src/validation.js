export function isSeparatorsValid(separators) {
  const regex = /[^0-9-.]/;
  return separators.every((sep) => regex.test(sep));
}

export function isExpressionValid(separator, expression) {
  for (const str of expression) {
    if (!separator.includes(str) && isNaN(str)) return false;
    if (str < 0) return false;
  }
  return true;
}
