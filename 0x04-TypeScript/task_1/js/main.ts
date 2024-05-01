interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  contract: boolean;
  [propName: string]: any;
}

// directors interface extends teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}
// writing a studennt class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return "Currently working";
  }
  displayName() {
    return this.firstName;
  }
}

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}
