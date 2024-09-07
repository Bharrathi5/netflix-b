export const validData = (email, password) => {

    const isEmailValid = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email);
    const isPassValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if (!isEmailValid) return "Invalid e-mail id.";
    if (!isPassValid) return "Invalid Password.";
    
    return null;
};
