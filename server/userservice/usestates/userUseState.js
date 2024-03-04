const User = require('../models/userSchema')

class UserState{
    async createUser(name, email, password){
        try{
            const user = new User({ name, email, password })
            const newUser = await user.save()
            return newUser
        }
        catch(error){
            throw new Error(`Failed to create user: ${error}`)
        }
    }
}

module.exports = new UserState()