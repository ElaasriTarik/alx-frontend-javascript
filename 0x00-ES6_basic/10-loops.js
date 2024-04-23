export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const idx of array) {
    const value = idx;
    const str = appendString + value;
    arr.push(str);
  }

  return arr;
}
