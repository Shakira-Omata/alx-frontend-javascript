// Define the Teacher interface
interface Teacher {
  readonly firstName: string;  
  readonly lastName: string;   
  fullTimeEmployee: boolean;   
  yearsOfExperience?: number;  
  location: string;            
  [propName: string]: any;     
}


const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
};

console.log('Teacher 1:', teacher1);


const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,
};

console.log('Teacher 2:', teacher2);


const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log('Teacher 3:', teacher3);


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