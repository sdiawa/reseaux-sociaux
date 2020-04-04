const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello prod!");
});
exports.getDsk = functions.https.onRequest((req, res) =>{
    admin.firestore().collection('dsk').get()
        .then(data=>{
            let dsk =[];
           data.forEach(doc => {
               dsk.push(doc.data());

           });
           return res.json(dsk);
        })
        .catch(err => console.error(err))
});

exports.createDsk = functions.https.onRequest((req, res) =>{
    if(req.method!== 'POST'){
        return res.status(400).json({error : 'Erreur requete'});
    }
    const newDsk ={
        body: req.body.body,
        userHandle: req.body.userHandle,
        createAt: admin.firestore.Timestamp.fromDate(new Date())
    };

    admin
        .firestore()
        .collection('dsk')
        .add(newDsk)
        .then((doc) =>{
            res.json({ message: `document ${doc.id} creer avec succès` });
        })
        .catch((err) =>{
        res.status(500).json({ error: 'erreur connexion '});
        console.error(err);
    });
});