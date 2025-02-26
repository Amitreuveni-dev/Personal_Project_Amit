import { Student, createStudent } from "./modelWeb.js";

const studentStoregedKey = "students";


// login and create user case : 


export const loginButton = document.getElementById("login-btn");
loginButton?.addEventListener("click", (e: Event) => {
    e.preventDefault();

    const userNameInput = (document.getElementById("UserName") as HTMLInputElement).value;
    const passwordInput = (document.getElementById("password") as HTMLInputElement).value;

    if (!userNameInput || !passwordInput) {
        alert("Please enter both user username and password.");
        return;
    }


    const savedUsers: Student[] = JSON.parse(localStorage.getItem(studentStoregedKey) || '[]');
    const user = savedUsers.find(f => f.username === userNameInput && f.password === passwordInput);

    if (!user) {
        alert("Invalid user name or password");
    } else {
        window.location.href = "schoolWeb.html";
    }


});
export const signUpButtonFromLogin = document.getElementById("sign-up-button");
signUpButtonFromLogin?.addEventListener("click", (e: Event) => {
    e.preventDefault();
    window.location.href = "createUser.html";
});


export const createUserButton = document.getElementById("create-user-button");
createUserButton?.addEventListener("click", (e: Event) => {
    e.preventDefault();

    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const firstName = (document.getElementById("first-name") as HTMLInputElement).value;
    const lastName = (document.getElementById("last-name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const birthdate = (document.getElementById("birthdate") as HTMLInputElement).value;

    if (!username || !password || !firstName || !lastName || !email || !phone || !birthdate) {
    alert("Please fill in all the fields.");
    return;        
    }

    const savedUsers: Student[] = JSON.parse(localStorage.getItem(studentStoregedKey) || "[]");
    if (savedUsers.find(f => f.username === username)) {
        alert("Username already exists. Please choose diffrent username.");
    }
    
    const newStudent = createStudent(username, password, firstName, lastName, email, phone, birthdate);
    savedUsers.push(newStudent);
    localStorage.setItem(studentStoregedKey, JSON.stringify(savedUsers));

    window.location.href = "login.html";
});

// profile case :

export const showUserProfile = () => {
    const userProfileInfoDiv = document.getElementById("user-profile-info")!;
    const savedUsers: Student[] = JSON.parse(localStorage.getItem(studentStoregedKey) || '[]');
    const currentUser = savedUsers.find(user => user.username === localStorage.getItem('currentUser'));

    if (!currentUser) {
        userProfileInfoDiv.textContent = "No user found";
    } else {
        userProfileInfoDiv.textContent =
        `Username: ${currentUser.username},
        First Name: ${currentUser.firstName},
        Last Name: ${currentUser.lastName},
        Email: ${currentUser.email},
        Phone: ${currentUser.phone},
        Birthdate: ${currentUser.birthdate}`;
    }
};

