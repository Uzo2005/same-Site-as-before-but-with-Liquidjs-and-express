const LocalStrategy = require('passport-local').Strategy
const bcrypt        = require('bcrypt')

const initialize =  (passport, getUserByName,getUserByEmail) => {
    const authenticateUser = async (studentName, studentPassword, done) => {
        const user = getUserByName(studentName)
        if(user == null ){
            return done(null, false, {message: 'No User With That Name'})
        }

        try{
            if(await bcrypt.compare(user.password, studentPassword)){
                return done(null, user)

            }else{
                return done(null, false, {message: 'Password Incorrect'})
            }

        }catch (e){
            return done(e)
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'studentName', passwordField: 'studentPassword'},
    authenticateUser))

    passport.serializeUser((user, done) => {
        done(null, user.name)

    })
    passport.deserializeUser((user,done) => {
        done(null, getUserByEmail(studentEmail))
    })
}

module.exports = initialize