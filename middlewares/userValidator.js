exports.userSignUpValidator = (req, res, next ) => {
    req.chek('name', 'Name is Required').notEmpty()
    req.check('email').isEmail()
    req.check('password')
        .notEmpty()
        .isLength({min: 6, max: 10})
        .withMessage('Password must between 6 and 10 caracter')

    const errors = req.validationErrors()

    if(errors){
        return res.status(400).json(errors)
    }

    next()

} 