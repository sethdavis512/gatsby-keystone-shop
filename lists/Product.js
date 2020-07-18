const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage, Decimal, Text } = require('@keystonejs/fields');
require('dotenv').config();

const adapter = new CloudinaryAdapter({
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: process.env.CLOUDINARY_DIR_NAME
});

module.exports = {
    fields: {
        image: {
            type: CloudinaryImage,
            adapter
        },
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
