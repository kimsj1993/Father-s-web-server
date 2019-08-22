const passport = require('passport');

module.exports = (app) => {
    app.post('/login', passport.authenticate('local', {
        
    })
    )
}
