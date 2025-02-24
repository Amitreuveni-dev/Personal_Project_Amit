import { UserModel, Student } from '../1model/modelWeb';
import { UserView } from '../2view/viewWeb';

export class UserController {
    static createUser(username: string, password: string, firstName: string, lastName: string, email: string, phone: string, birthdate: string): void {
        const newUser: Student = {
            username,
            password,
            firstName,
            lastName,
            email,
            phone,
            birthdate
        };

        UserModel.saveUser(newUser);
        UserView.showAlert("User created successfully!");
    }

    static loginUser(username: string, password: string): void {
        const user = UserModel.findUserByUsername(username);

        if (user && user.password === password) {
            UserView.renderProfile(user);
        } else {
            UserView.showAlert("Invalid username or password!");
        }
    }
}