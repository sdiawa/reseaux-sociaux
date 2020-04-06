const functions = require('firebase-functions');

const app = require('express')();

const  FBAuth = require('./util/fbAuth');

const {getAllDsk, postOneDsks} = require('./handlers/dsk');
const {signup, login} = require('./handlers/users');



//dsk route
app.get('/dsk', getAllDsk);
app.post('/dsks', FBAuth, postOneDsks);
//users routes
app.post('/signup', signup);
app.post('/login',login);

exports.api = functions.region('europe-west1').https.onRequest(app);

