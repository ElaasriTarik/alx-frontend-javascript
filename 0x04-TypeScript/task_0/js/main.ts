interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Schmoe',
  age: 21,
  location: 'Spain',
};
const student2: Student = {
  firstName: 'Dave',
  lastName: 'Chappelle',
  age: 60,
  location: 'USA',
};
const studentsList: Array<Student> = [student1, student2];
// rendering a table for the students
const table = document.createElement('table');
const th = document.createElement('th');
const tr = document.createElement('tr');
const td = document.createElement('td');

table.appendChild(tr);
for (let i = 0; i < studentsList.length; i++) {
  const student = studentsList[i];
  tr.innerHTML += `<td>${student.firstName}</td>`;
  tr.innerHTML += `<td>${student.location}</td>`;
}
document.body.appendChild(table);