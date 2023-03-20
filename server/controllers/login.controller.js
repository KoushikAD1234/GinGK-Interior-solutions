const {UserModel} = require('../models')

const login = async (req, res, next) => {
    try {
        const user = await UserModel.findOne({
            username: req.body.username,
            password: req.body.password,
        })
        if(!user){
            return res.status(401).send("User not found");
        }
        else{
            return res.status(200).send("Login successfull");
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({Status : 'Failed'});
    }
}

module.exports = {login}