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
const PostSchema = require('./lists/Post.js');
const OrderSchema = require('./lists/Order.js');

require('dotenv').config();

// App
const PROJECT_NAME = 'Gatsby Keystone Shop';
const adapterConfig = { mongoUri: process.env.MONGO_URI };

const keystone = new Keystone({
    name: PROJECT_NAME,
    adapter: new Adapter(adapterConfig),
    onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
    cookie: {
        secure: true
    },
    cookieSecret: process.env.COOKIE_SECRET
});

// Lists
keystone.createList('User', UserSchema);
keystone.createList('Product', ProductSchema);
keystone.createList('Post', PostSchema);
keystone.createList('Order', OrderSchema);

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
    ],
    configureExpress: app => {
        app.set('trust proxy', 1);
    }
};
