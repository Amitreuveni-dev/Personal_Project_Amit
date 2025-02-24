"use strict";
exports.__esModule = true;
exports.UserView = void 0;
var UserView = /** @class */ (function () {
    function UserView() {
    }
    UserView.renderProfile = function (user) {
        var profileContainer = document.getElementById('user-profile-info');
        if (profileContainer) {
            profileContainer.innerHTML = "\n                <p>Username: " + user.username + "</p>\n                <p>Name: " + user.firstName + " " + user.lastName + "</p>\n                <p>Email: " + user.email + "</p>\n                <p>Phone: " + user.phone + "</p>\n                <p>Birthdate: " + user.birthdate + "</p>\n            ";
        }
    };
    UserView.clearForm = function () {
        var form = document.getElementById('sign-up-form');
        if (form) {
            form.reset();
        }
    };
    UserView.showAlert = function (message) {
        alert(message);
    };
    return UserView;
}());
exports.UserView = UserView;
