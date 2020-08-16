const { Select, Text } = require('@keystonejs/fields');

module.exports = {
    fields: {
        firstName: {
            type: Text,
            isRequired: true
        },
        lastName: {
            type: Text,
            isRequired: true
        },
        products: {
            type: Text,
            isRequired: true
        },
        status: {
            type: Select,
            options: 'Pending, Processed',
            isRequired: true
        }
    }
};
