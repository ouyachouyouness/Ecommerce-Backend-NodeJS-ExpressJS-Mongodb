const express = require('express')
const { getOnUser} = require('../controllers/userController')
const { userById } = require('../middlewares/user')
const router = express.Router()
const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth')

router.get('/profile/:userId', requireSignIn, isAuth, getOnUser )

router.param('userId', userById)

module.exports = router