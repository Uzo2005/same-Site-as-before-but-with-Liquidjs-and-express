const LocalStrategy = require('passport-local').Strategy
const bcrypt        = require('bcrypt')

const initialize =  (passport, getUserByName) => {
    const authenticateUser = async (studentName, studentPassword, done) => {
        const user = getUserByName(studentName)
       /**
        * const user = async getUserByName(studentName)
        *  */ 
        // console.log(user)
        
        if(typeof(user) == 'undefined'){
            return done(null, false, {message: 'No User With That Name'})
        }

        try{
            
            if(await bcrypt.compare( studentPassword,user.password )){
                 return await done(null, user)

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
        done(null, user)

    })
    passport.deserializeUser((user,done) => {
        done(null, user )
        
    })
}

module.exports = initialize