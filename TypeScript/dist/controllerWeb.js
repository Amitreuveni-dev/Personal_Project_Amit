const studentStoregedKey = "students";
const loginButton = document.getElementById("login-btn");
loginButton?.addEventListener("click", (e) => {
    e.preventDefault();
    const userNameInput = document.getElementById("UserName").value;
    const passwordInput = document.getElementById("password").value;
    if (!userNameInput || !passwordInput) {
        alert("Please enter both user username and password.");
        return;
    }
    const savedUsers = JSON.parse(localStorage.getItem(studentStoregedKey) || '[]');
    const user = savedUsers.find(f => f.username === userNameInput && f.password === passwordInput);
    if (!user) {
        alert("Invalid user name or password");
    }
    else {
        window.location.href = "webSchool.html";
    }
});
const signUpButtonFromLogin = document.getElementById("sign-up-button");
signUpButtonFromLogin?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "createUser.html";
});
