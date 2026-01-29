export const checkValidation = (name, email, password, confirmPassword, isSignUp = true) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const isPasswordValid = passwordRegex.test(password);

    if (!isEmailValid) {
        return { isValid: false, message: "Invalid email format." };
    }

    if (!isPasswordValid) {
        return { isValid: false, message: "Password must be at least 6 characters long and contain both letters and numbers." };
    }

    if (isSignUp) {
        if (!name || name.trim() === "") {
            return { isValid: false, message: "Name cannot be empty." };
        }
        if (password !== confirmPassword) {
            return { isValid: false, message: "Passwords do not match." };
        }
    }

    return { isValid: true, message: "Validation successful." };
};  