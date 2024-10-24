export function isSeparatorsValid(separators) {
  for (const separator of separators) {
    if (!isNaN(separator)) return false;
    if (separator === "-" || separator === ".") return false;
  }
  return true;
}

export function isExpressionValid(separator, expression) {
  for (const str of expression) {
    if (!separator.includes(str) && isNaN(str)) return false;
    if (str < 0) return false;
  }
  return true;
}
