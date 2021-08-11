const express = require('express')
const { getOnUser, updateOnUser} = require('../controllers/userController')
const { userById } = require('../middlewares/user')
const router = express.Router()
const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth')


router.get('/:userId', requireSignIn, isAuth, getOnUser )
router.put('/:userId', requireSignIn, isAuth, updateOnUser )
 

router.param('userId', userById)

module.exports = router