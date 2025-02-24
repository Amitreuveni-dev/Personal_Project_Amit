"use strict";
exports.__esModule = true;
exports.UserController = void 0;
var modelWeb_1 = require("../1model/modelWeb");
var viewWeb_1 = require("../2view/viewWeb");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.createUser = function (username, password, firstName, lastName, email, phone, birthdate) {
        var newUser = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            birthdate: birthdate
        };
        modelWeb_1.UserModel.saveUser(newUser);
        viewWeb_1.UserView.showAlert("User created successfully!");
    };
    UserController.loginUser = function (username, password) {
        var user = modelWeb_1.UserModel.findUserByUsername(username);
        if (user && user.password === password) {
            viewWeb_1.UserView.renderProfile(user);
        }
        else {
            viewWeb_1.UserView.showAlert("Invalid username or password!");
        }
    };
    return UserController;
}());
exports.UserController = UserController;
