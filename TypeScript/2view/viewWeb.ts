export class UserView {
    static renderProfile(user: any): void {
        const profileContainer = document.getElementById('user-profile-info');
        if (profileContainer) {
            profileContainer.innerHTML = `
                <p>Username: ${user.username}</p>
                <p>Name: ${user.firstName} ${user.lastName}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Birthdate: ${user.birthdate}</p>
            `;
        }
    }

    static clearForm(): void {
        const form = document.getElementById('sign-up-form');
        if (form) {
            form.reset();
        }
    }

    static showAlert(message: string): void {
        alert(message);
    }
}