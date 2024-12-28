export function isObject(value) {
  const type = typeof value;
  return (
    value != null &&
    (type === "object" || type === "function") &&
    !Array.isArray(value)
  );
}

export function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
}

export function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}

export function isFunction(value) {
  return typeof value === "function";
}
