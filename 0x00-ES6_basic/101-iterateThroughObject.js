import createIteratorObject from './100-createIteratorObject';

export default function iterateThroughObject(reportWithIterator = createIteratorObject()) {
  const result = [];
  for (const employee of reportWithIterator) {
    result.push(`${employee}`);
  }
  return result.join(' | ');
}
