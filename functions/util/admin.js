const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();


module.exports = {admin, db};
/*const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL:  "https://reseaux-rencontre.firebaseio.com"

});*/