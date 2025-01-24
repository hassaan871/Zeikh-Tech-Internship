const Joi = require('joi');
const courseJoi = Joi.object({
        course: Joi.string().min(1).required() 
    });

const validateCourse = (req, res, next) => {
    const {error} = courseJoi.validate(req.body);
    if(error){
        return res.status(400).json({ error: error.details[0].message});
    }
    next();
}

module.exports = validateCourse;