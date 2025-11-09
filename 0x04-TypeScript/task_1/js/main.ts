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
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Test the function
console.log(printTeacher("John", "Doe")); 
console.log(printTeacher("Jane", "Smith"));