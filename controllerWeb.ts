import { Student, createStudent } from "./modelWeb.js";

export const studentStoregedKey = "students";


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


    const savedUsers: Student[] = JSON.parse(localStorage.getItem(studentStoregedKey) || "[]");
    const user = savedUsers.find(f => f.username === userNameInput && f.password === passwordInput);

    if (!user) {
        alert("Invalid user name or password");
    } else {
        localStorage.setItem("currentUser", user.username);
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
        return;
    }

    const newStudent = createStudent(username, password, firstName, lastName, email, phone, birthdate);
    savedUsers.push(newStudent);
    localStorage.setItem(studentStoregedKey, JSON.stringify(savedUsers));

    window.location.href = "login.html";
});

// click on profile edit profile close profile case :

export const cilckOnProfile = document.getElementById("profile-btn");
cilckOnProfile?.addEventListener("click", (e: Event) => {
    e.preventDefault();


    const userProfileInfo = document.getElementById("user-profile-btn");
    const scheduleElement = document.getElementById("schedule");
    const gradesElement = document.getElementById("user-grades");
    const aboutUsElement = document.getElementById("about-us");

    if (scheduleElement?.style.display === "block") {
        scheduleElement.style.display = "none";
        cilckOnSchedule.textContent = "schedule";
    }


    if (userProfileInfo?.style.display === "block") {
        userProfileInfo.style.display = "none";
    } else {
        if (gradesElement) gradesElement.style.display = "none";
        if (aboutUsElement) aboutUsElement.style.display = "none";
        showUserProfile();
    }


});


export const showUserProfile = () => {
    const userProfileInfo = document.getElementById("user-profile-info");
    userProfileInfo.style.display = "block";
    const savedUsers: Student[] = JSON.parse(localStorage.getItem(studentStoregedKey) || "[]");

    const currentUserName = localStorage.getItem("currentUser");
    if (!currentUserName) {
        console.log("no user logged in.");
        return;
    }

    const currentUser = savedUsers.find(user => user.username === localStorage.getItem("currentUser"));

    if (!currentUser) {
        console.log("User not found");
        return;
    }

    userProfileInfo.textContent = '';

    const title = document.createElement("h3");
    title.textContent = "Your profile"

    const firstName = document.createElement("p");
    firstName.textContent = `First Name: ${currentUser.firstName}`;

    const lastName = document.createElement("p");
    lastName.textContent = `Last Name: ${currentUser.lastName}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${currentUser.email}`;

    const phone = document.createElement("p");
    phone.textContent = `Phone: ${currentUser.phone}`;

    const birthdate = document.createElement("p");
    birthdate.textContent = `Birthdate: ${currentUser.birthdate}`;

    userProfileInfo.append(
        title,
        firstName,
        lastName,
        email,
        phone,
        birthdate
    );

    const editProfileButton = document.createElement("button");
    editProfileButton.textContent = "Edit Profile";
    userProfileInfo.appendChild(editProfileButton);
    editProfileButton.addEventListener("click", () => {
        editUserProfile(currentUser, savedUsers);
    });

    const closeProfileButton = document.createElement("button");
    closeProfileButton.textContent = "Close profile";
    userProfileInfo.appendChild(closeProfileButton);
    closeProfileButton?.addEventListener("click", () => {
        userProfileInfo.style.display = "none";
        showSchedule();
    });
};

export const editUserProfile = (currentUser: Student, savedUsers: Student[]) => {
    const userProfileDiv = document.getElementById("user-profile-info");

    if (userProfileDiv) {
        userProfileDiv.textContent = '';

        const firstNameInput = document.createElement("input");
        firstNameInput.type = "text";
        firstNameInput.value = currentUser.firstName;

        const lastNameInput = document.createElement("input");
        lastNameInput.type = "text";
        lastNameInput.value = currentUser.lastName;

        const emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.value = currentUser.email;

        const phoneInput = document.createElement("input");
        phoneInput.type = "tel";
        phoneInput.value = currentUser.phone;

        const birthdateInput = document.createElement("input");
        birthdateInput.type = "date";
        birthdateInput.value = currentUser.birthdate;

        userProfileDiv.append(
            "First Name: ",
            firstNameInput,
            "Last Name: ",
            lastNameInput,
            "Email: ",
            emailInput,
            "Phone: ",
            phoneInput,
            "Birthdate: ",
            birthdateInput
        );


        const closeEditButton = document.createElement("button");
        closeEditButton.textContent = "Go back";
        userProfileDiv.appendChild(closeEditButton);

        closeEditButton.addEventListener("click", (e: Event) => {
            showUserProfile();
        });

        const navigationButtons = document.querySelectorAll(".nav-button");
        navigationButtons.forEach(button => {
            button.setAttribute("disabled", "true");
        });

        const saveProfileChangesButton = document.createElement("button");
        saveProfileChangesButton.textContent = "Save Changes";

        userProfileDiv.appendChild(saveProfileChangesButton);

        saveProfileChangesButton.addEventListener("click", () => {

            navigationButtons.forEach(button => {
                button.removeAttribute("disabled");
            });


            const newFirstName = firstNameInput.value;
            const newLastName = lastNameInput.value;
            const newEmail = emailInput.value;
            const newPhone = phoneInput.value;
            const newBirthdate = birthdateInput.value;

            currentUser.firstName = newFirstName;
            currentUser.lastName = newLastName;
            currentUser.email = newEmail;
            currentUser.phone = newPhone;
            currentUser.birthdate = newBirthdate;

            localStorage.setItem(studentStoregedKey, JSON.stringify(savedUsers));

            showUserProfile();
        });
    }
};


// schedule case :


export const cilckOnSchedule = document.getElementById("schedule-btn");
cilckOnSchedule?.addEventListener("click", (e: Event) => {
    e.preventDefault();

    const scheduleElement = document.getElementById("schedule");
    const userProfileInfo = document.getElementById("user-profile-btn");


    
    if (scheduleElement?.style.display === "block") {
        scheduleElement.style.display = "none";
        cilckOnSchedule.textContent = "Schedule";
    } else {
        scheduleElement.style.display = "block";
        cilckOnSchedule.textContent = "Close Schedule";
    }

    showSchedule();
});


export const showSchedule = () => {
    const schedule = document.getElementById("schedule");
    const scheduleElement = document.getElementById("schedule");
    const userProfileInfo = document.getElementById("user-profile-btn");

    if (schedule) {
        schedule.textContent = "";
    } else {
        if (userProfileInfo) {
            userProfileInfo.style.display = "none";
        }

        scheduleElement.style.display = "block";
        cilckOnSchedule.textContent = "Close Schedule";
    }

    const scheduleData = [
        "Monday: Math, English, History",
        "Tuesday: Science, Art, Physical Education",
        "Wednesday: Math, Geography, Music",
        "Thursday: Chemistry, English, Literature",
        "Friday: History, Physical Education"
    ];

    const title = document.createElement("h3");
    title.textContent = "Schedule for the Week";
    schedule.appendChild(title);



    const ul = document.createElement("ul");
    scheduleData.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });

    schedule.appendChild(ul);

};


