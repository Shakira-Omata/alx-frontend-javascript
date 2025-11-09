// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Extend Teacher interface to create Director interface
interface Director extends Teacher {
  numberOfReports: number;
}

// Teacher example
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,

};

console.log(teacher3);

// Director example
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  yearsOfExperience: 15,
  numberOfReports: 17,
};

console.log(director1);

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of printTeacher
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName[0]}. ${lastName}`;
}

// Test the function
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); 
console.log(printTeacher({ firstName: "Jane", lastName: "Smith" }));

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the StudentClass
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test the StudentClass
const student1 = new StudentClass("John", "Doe");
console.log(student1.displayName()); 
console.log(student1.workOnHomework()); 

const student2 = new StudentClass("Jane", "Smith");
console.log(student2.displayName()); 
console.log(student2.workOnHomework());