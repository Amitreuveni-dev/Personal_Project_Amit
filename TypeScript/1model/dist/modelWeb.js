"use strict";
exports.__esModule = true;
exports.createStudent = void 0;
exports.createStudent = function (username, password, firstName, lastName, email, phone, birthdate) {
    return {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        birthdate: birthdate
    };
};
