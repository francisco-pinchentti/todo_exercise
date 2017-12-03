const Joi = require('joi');

module.exports = {

    create: {
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }
    },

    'delete': {
        params: {
            id: Joi.string()
        }
    },

};
