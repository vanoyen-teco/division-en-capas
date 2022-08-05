require('dotenv/config');
const MongoStore = require('connect-mongo');
const config = 
{
    store: MongoStore.create({
        mongoUrl: process.env.DB_CNX,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    }),
    secret: 'coder',
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 600000} //10 minutos
}

module.exports = config;