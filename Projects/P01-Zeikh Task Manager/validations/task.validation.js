const Joi = require('joi');

const validateTask = (task) => {
    const taskSchema = Joi.object({
        heading: Joi.string().min(5).required(),
        description: Joi.string().min(10).required(),
        isCompleted: Joi.boolean().required()
    });
    return taskSchema.validate(task);
}

module.exports = validateTask;