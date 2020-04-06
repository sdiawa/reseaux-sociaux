const { db } = require('../util/admin');

exports.getAllDsk = (req, res) => {
    db.collection('dsk')
        .orderBy('createdAt', 'desc')
        .get()
        .then((data) => {
            let dsk = [];
            data.forEach((doc) => {
                dsk.push({
                    dskId: doc.id,
                    body: doc.data().body,
                    userHandle: doc.data().userHandle,
                    createdAt: doc.data().createdAt,
                    commentCount: doc.data().commentCount,
                    likeCount: doc.data().likeCount
                });
            });
            return res.json(dsk);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({error: err.code});
        });
};

exports.postOneDsks = (req, res) =>{
    if(req.body.body.trim()===''){
        return res.status(400).json({ body: 'body ne doit pas etre vide'});
    }

    const newDsk = {
        body: req.body.body,
        userHandle: req.user.handle,
        createdAt: new Date().toISOString()
    };

    db.collection('dsk')
        .add(newDsk)
        .then((doc) =>{
            res.json({ message: `document ${doc.id} creer avec succès` });
        })
        .catch((err) => {
            res.status(500).json({ error: 'erreur connexion '});
            console.error(err);
        });
};