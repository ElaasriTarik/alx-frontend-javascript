import createIteratorObject from "./100-createIteratorObject";
export default function iterateThroughObject(reportWithIterator = createIteratorObject()) {
	let result = [];
	for (let employee of reportWithIterator) {
		result.push(`${employee}`);
	}
	return result.join(' | ');
}
