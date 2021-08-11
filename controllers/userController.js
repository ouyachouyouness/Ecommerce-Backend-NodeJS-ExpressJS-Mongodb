const user = require("../models/user")

exports.getOnUser = (req, res) => {


    req.profile.salt = undefined

    req.profile.hashed_password = undefined
    res.json({
        user: req.profile
    })
}

exports.updateOnUser = (req, res) => {

    user.findOneAndUpdate({_id: req.profile._id}, {$set: req.body}, {new: true}, (err, user) => {
        if(err){
            return res.status(400).json({err})
        }
        req.profile.salt = undefined

        req.profile.hashed_password = undefined
        res.json({
            user
        })
    })
}