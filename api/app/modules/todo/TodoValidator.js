const Joi = require('joi');

module.exports = {
    'delete': {
        params: {
            id: Joi.number()
        }
    },
    list: {
        query: {
            title: Joi.string().max(32),
            description: Joi.string().max(512),
            done: Joi.boolean(),
            order: Joi.string().default('id'),
            asc: Joi.boolean().default(true),
            limit: Joi.number().min(1).default(10),
            offset: Joi.number().min(0).default(0)
        }
    },
    create: {
        body: {
            title: Joi.string().max(32).required(),
            description: Joi.string().max(512).allow('').optional(),
            done: Joi.boolean().default(false),
            dueDate: Joi.string().optional()
        }
    },
    update: {
        params: {
            id: Joi.number()
        },
        body: {
            id: Joi.number().optional(),
            title: Joi.string().max(32).required(),
            description: Joi.string().max(512).allow('').optional(),
            done: Joi.boolean().default(false),
            dueDate: Joi.string().optional()
        }
    }
};
