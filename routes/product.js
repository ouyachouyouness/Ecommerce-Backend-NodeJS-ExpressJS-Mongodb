const express = require('express')

const { userById } = require('../middlewares/user')

const router = express.Router()
const { createProduct,
     showProduct,
     productById,
     removeProduct,
     updateProduct
    } = require('../controllers/productController')
const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth')


router.post('/create/:userId', [requireSignIn, isAuth, isAdmin] , createProduct  )

router.delete('/:productId', [requireSignIn, isAuth, isAdmin], removeProduct)
router.put('/:productId', [requireSignIn, isAuth, isAdmin], updateProduct)


router.get('/:productId', showProduct)
router.param('product', productById)

router.param('userId', userById)

module.exports = router;