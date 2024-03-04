const UserState = require('../usestates/userUseState')

class UserController{
    async login(req, res){
        try{
            const { name, email, password } = req.body
            const user = await UserState.createUser(name, email, password)
            res.status(201).send(user)
        }
        catch(error){
            res.status(500).send(`Failed to login ${error}`)
        }
    }
}

module.exports = new UserController()