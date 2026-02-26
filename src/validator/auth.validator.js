import { emailValidator } from "./email.validator.js";
import passwordValidator from "./password.validator.js";

export const loginValidator = (email, password) => {
    const errors = {};

    if (!email || !emailValidator(email)) {
        errors.email = "Invalid email address";
    }

    if (!password || !passwordValidator(password)) {
        errors.password = "Invalid password";
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors
    }
}