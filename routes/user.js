let User = require('../model/User');

// Create a new user (POST)
function createUser(req, res) {

    //console.log("Données reçues:", req.body);

    let user = new User();
    user.id = req.body.id;
    user.nom = req.body.nom;
    user.motdepasse = req.body.motdepasse;
    user.isadmin = req.body.isadmin;

    console.log("POST user received:");
    console.log(user);

    user.save((err) => {
        if(err) {
            res.send('Cannot post user ', err);
        } else {
            res.json({ message: `${user.nom} saved!`});
        }
    });
}

// Récupérer tous les utilisateurs (GET)
function getUsers(req, res) {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
}

// Authentifier un utilisateur (POST)
function authenticateUser(req, res) {
    const { nom, motdepasse } = req.body;

    User.findOne({ nom: nom }, function(err, user) {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erreur du serveur' });
        }
        if (!user) {
            return res.status(401).json({ success: false, message: 'Utilisateur non trouvé' });
        }
        if (user.motdepasse === motdepasse) {
            res.json({ success: true, user: { nom: user.nom, isadmin: user.isadmin } });
        } else {
            res.status(401).json({ success: false, message: 'Mot de passe incorrect' });
        }
    });
}


module.exports = { createUser, getUsers, authenticateUser };