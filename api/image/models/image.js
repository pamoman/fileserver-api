'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const check = (data) => {
    if (!'subject' in data || !data.subject) {
        throw strapi.errors.badRequest('Subject required!')
    }
};

module.exports = {
     /**
     * Triggered before device create and update.
     */
    lifecycles: {
        beforeCreate(data) {
            check(data);
        },
        beforeUpdate(_, data) {
            check(data);
        }
    }
};