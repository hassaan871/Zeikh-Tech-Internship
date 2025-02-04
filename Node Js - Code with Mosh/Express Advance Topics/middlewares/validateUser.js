const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(2).required()
});

const validateUser = (req, res, next) => {
    const {error} = userSchema.validate(req.body);
    if(error) return res.status(400).send({error: error.details[0].message });
    next();
}

module.exports = validateUser;