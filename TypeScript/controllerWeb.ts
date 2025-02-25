import { Student, createStudent } from "./modelWeb.js";

const loginButton = document.getElementById("login-btn");
loginButton?.addEventListener("click", () => {
    alert("conected");
});

const signUpButton = document.getElementById("sign-up-button");
signUpButton?.addEventListener("click", () => {
    alert("user created");
});

const userNameInput = document.getElementById("userName") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;


