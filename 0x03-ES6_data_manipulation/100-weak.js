export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let weakness = weakMap.get(endpoint) || 0;
  weakness += 1;

  if (weakness >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, weakness);
  }
}
