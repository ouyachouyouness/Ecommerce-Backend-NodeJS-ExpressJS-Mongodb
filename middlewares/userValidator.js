exports.userSignUpValidator = (req, res, next ) => {
    req.check('name', 'Name is Required')
        .notEmpty();

    req.check('email','Email is required')
        .notEmpty()
        .isEmail();

    req.check('password', 'Password is Required')
        .notEmpty()
        .isLength({min: 6, max: 10})
        .withMessage('Password must between 6 and 10 caracter')

    const errors = req.validationErrors()

    if(errors){
        return res.status(400).json({error: errors[0].msg});
    }else{
        next()
    }

   

} 