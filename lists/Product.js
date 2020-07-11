const { Decimal, Text } = require('@keystonejs/fields');

module.exports = {
    fields: {
        title: {
            type: Text,
            isRequired: true
        },
        description: {
            type: Text,
            isRequired: true
        },
        price: {
            type: Decimal,
            isRequired: true
        }
    }
};
