const express = require('express')

const { userById } = require('../middlewares/user')


const router = express.Router()
const { createCategory, showCategory, categoryId } = require('../controllers/categoryController')
const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth')


router.post('/create/:userId', [requireSignIn, isAuth, isAdmin], createCategory )
router.get('/:categoryId', showCategory )


router.param('userId', userById)
router.param('categoryId', categoryId)

module.exports = router;