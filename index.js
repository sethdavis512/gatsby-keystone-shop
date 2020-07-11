const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
// Keytone apps
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require('@keystonejs/app-static');

// Database
const initialiseData = require('./initial-data');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

// Gatsby Keystone shop imports
const UserSchema = require('./lists/User.js');
const ProductSchema = require('./lists/Product.js');
require('dotenv').config();

// App
const PROJECT_NAME = 'Gatsby Keystone Shop';
const adapterConfig = { mongoUri: process.env.MONGO_URI };

const keystone = new Keystone({
    name: PROJECT_NAME,
    adapter: new Adapter(adapterConfig),
    onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData
});

// Lists
keystone.createList('User', UserSchema);
keystone.createList('Product', ProductSchema);

// Auth
const authStrategy = keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: 'User'
});

module.exports = {
    keystone,
    apps: [
        new GraphQLApp(),
        new StaticApp({
            path: '/',
            src: 'client/public',
            fallback: 'client/public/index.html'
        }),
        new AdminUIApp({
            enableDefaultRoute: true,
            authStrategy
        })
    ]
};
