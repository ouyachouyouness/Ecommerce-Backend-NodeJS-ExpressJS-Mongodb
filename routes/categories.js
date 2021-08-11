const express = require('express')

const { userById } = require('../middlewares/user')


const router = express.Router()
const {
     allCategories,
     createCategory,
     showCategory, 
     categoryId,
     updateCategory,
     deleteCategory 
    } = require('../controllers/categoryController')
const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth')


router.post('/create/:userId', [requireSignIn, isAuth, isAdmin], createCategory )
router.put('/:categoryId/:userId', [requireSignIn, isAuth, isAdmin], updateCategory )
router.delete('/:categoryId/:userId', [requireSignIn, isAuth, isAdmin], deleteCategory )


router.get('/:categoryId', showCategory )
router.get('/', allCategories )


router.param('categoryId', categoryId)
router.param('userId', userById)


module.exports = router;