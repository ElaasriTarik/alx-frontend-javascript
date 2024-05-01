interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500)
    return new Teacher();
  else
    return new Director();
}
//check if director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// exec work function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee))
    return employee.workDirectorTasks();
  else
    return employee.workTeacherTasks();
}

type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math")
    return "Teaching Math";
  else
    return "Teaching History";
}
