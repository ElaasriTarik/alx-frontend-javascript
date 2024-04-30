export default function getListStudentIds(arr) {
	const list = [];
	if (!Array.isArray(arr))
		return list;

	for (const student of arr) {
		list.push(student.id);
	}
	return list;
}
