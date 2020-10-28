exports.userSignupValidator = (req , res, next) => {
    req.check('name' , 'Nome é Obrigatório').notEmpty();
    req.check('email' , 'Email deve estar entre 3 e 32 caracteres')
       .matches(/.+\@.+\..+/) 
       .withMessage('Email deve conter @')
       .isLength({
           min: 4,
           max: 32 
       });
    req.check('password', 'Password é Obrigatório').notEmpty()
    req.check('password')
       .isLength({min: 6}) 
       .withMessage('Password deve conter pelo menos 6 caracteres')
       .matches(/\d/)
       .withMessage('Password deve conter números')
       const errors = req.validationErrors()
       if(errors) {
           const firstError = errors.map(error => error.msg)[0];
           return res.status(400).json({error: firstError});
       }
       next();
    };