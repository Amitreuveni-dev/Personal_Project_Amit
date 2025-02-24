export type Student = {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthdate: string;
};

export const createStudent = (username: string, password: string, firstName: string, lastName: string, email: string, phone: string, birthdate: string): Student => {
    return {
        username,
        password,
        firstName,
        lastName,
        email,
        phone,
        birthdate
    };
};