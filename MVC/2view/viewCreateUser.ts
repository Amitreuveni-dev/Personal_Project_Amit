type Student = {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthdate: string;
}

const createStudent = (username: string, password: string, firstName: string, lastName: string, email: string, phone: string, birthdate: string): void => {
    const newStudent: Student = {
        username,
        password,
        firstName,
        lastName,
        email,
        phone,
        birthdate
    };

    let students = JSON.parse(localStorage.getItem('students') || '[]');
    students.push(newStudent); 
    localStorage.setItem('students', JSON.stringify(students));

    alert("Student created successfully!");
};
