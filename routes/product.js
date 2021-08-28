const express = require('express')



const { userById } = require('../middlewares/user')

const router = express.Router()
const { createProduct,
     showProduct,
     productById,
     removeProduct,
     updateProduct,
     allProduct,
     relatedProduct,
     SearchProduct,
     photoProduct
    } = require('../controllers/productController')
const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth')

router.get('/', allProduct)
router.post('/create/:userId', [requireSignIn, isAuth, isAdmin] , createProduct  )

router.delete('/:productId', [requireSignIn, isAuth, isAdmin], removeProduct)
router.put('/:productId', [requireSignIn, isAuth, isAdmin], updateProduct)


router.get('/:productId', showProduct)

router.get('/related/:productId', relatedProduct)

router.post('/search', SearchProduct);
router.get('/photo/:productId', photoProduct);


router.param('productId', productById)

router.param('userId', userById)

module.exports = router;

