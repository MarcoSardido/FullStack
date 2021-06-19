if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Folder for templates such as header and footer
app.set('layout', 'layouts/layout'); 

app.use(expressLayouts);

//Folder for styles, images, javascripts
app.use(express.static('public'));

//Firebase
const firebase = require('firebase/app');
require('firebase/firestore');
const{
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
}
firebase.initializeApp(firebaseConfig);

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);