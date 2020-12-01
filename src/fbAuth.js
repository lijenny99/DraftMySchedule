const {firebase, admin} = require('./fbConfig');

module.exports = (req, res, next) => {
    const bearer = req.header('Authorization').split(' ');
    const token = bearer[1];
    admin.auth().verifyIdToken(token).then(decodedToken => {
        req.user = decodedToken.email
        return next()
    }).catch(err => {
        res.send(err)
    })
}