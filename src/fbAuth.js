const {firebase, admin} = require('./fbConfig');

module.exports = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer','').trim()
    console.log(token)
    admin.auth().verifyIdToken(token).then(function (decodedToken) {
        req.user = decodedToken.uid
        user.providerData.forEach(function (profile) {
            console.log('this works: '+profile.email)
        })
        return next()
    }).catch(function (error) {
        console.log('not signed in')
        res.send(error)
    })
}