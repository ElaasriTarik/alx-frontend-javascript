import createReportObject from './12-createReportObject';

export default function createIteratorObject(report = createReportObject()) {
  const employees = [];
  // console.log(report);
  for (const department of Object.keys(report.allEmployees)) {
    for (const name of report.allEmployees[department]) {
      employees.push(name);
    }
  }
  return employees;
}
