var createStudent = function (username, password, firstName, lastName, email, phone, birthdate) {
    var newStudent = {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        birthdate: birthdate
    };
    var students = JSON.parse(localStorage.getItem('students') || '[]');
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));
    alert("Student created successfully!");
};
