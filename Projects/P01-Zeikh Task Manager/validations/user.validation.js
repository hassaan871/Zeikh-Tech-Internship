const Joi = require('joi');

const validateUser = (user) => {
    const userSchema = Joi.object({
        firstname: Joi.string().min(1).required(),
        lastname: Joi.string().min(1).required(),
        username: Joi.string().min(5).required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(5).required()
    });
    return userSchema.validate(user);
}

const validateLoginUser = (user) => {
    const userSchema = Joi.object({
        username: Joi.string().min(5),
        email: Joi.string().min(5).email(),
        password: Joi.string().min(5).required()
    }).or('email', 'username');
    return userSchema.validate(user);
}

const validateFirstname = (firstname) => {
    const firstnameSchema = Joi.object({
        firstname: Joi.string().min(1).required()
    });
    return firstnameSchema.validate(firstname);
}

const validateLastname = (lastname) => {
    const lastnameSchema = Joi.object({
        lastname: Joi.string().min(1).required()
    });
    return lastnameSchema.validate(lastname);
}

const validateUsername = (username) => {
    const usernameSchema = Joi.object({
        username: Joi.string().min(5).required()
    });
    return usernameSchema.validate(username);
}

const validateEmail = (email) => {
    const emailSchema = Joi.object({
        email: Joi.string().min(5).required().email()
    });
    return emailSchema.validate(email);
}

const validatePassword = (password) => {
    const passwordSchema = Joi.object({
        password: Joi.string().min(5).required()
    });
    return passwordSchema.validate(password);
}

module.exports = {
    validateUser,
    validateLoginUser,
    validateFirstname,
    validateLastname,
    validateUsername,
    validatePassword,
    validateEmail
}