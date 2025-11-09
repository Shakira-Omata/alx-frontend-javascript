// Define the Teacher interface
interface Teacher {
  readonly firstName: string;  // readonly means it can only be set during initialization
  readonly lastName: string;   // readonly means it can only be set during initialization
  fullTimeEmployee: boolean;   // always defined
  yearsOfExperience?: number;  // optional (note the ?)
  location: string;            // always defined
  [propName: string]: any;     // allows any additional properties
}

// Example 1: Teacher with all required properties
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
};

console.log('Teacher 1:', teacher1);

// Example 2: Teacher with optional yearsOfExperience
const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,
};

console.log('Teacher 2:', teacher2);

// Example 3: Teacher with additional property (contract)
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log('Teacher 3:', teacher3);

// Example 4: Teacher with multiple additional properties
const teacher4: Teacher = {
  firstName: 'Alice',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'Paris',
  yearsOfExperience: 10,
  contract: true,
  subject: 'Mathematics',
  department: 'Science',
};

console.log('Teacher 4:', teacher4);