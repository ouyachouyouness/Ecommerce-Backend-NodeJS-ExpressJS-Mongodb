const Category = require('../models/category')

exports.createCategory = (req, res) => {
    const category = new Category(req.body);

    category.save((err, category) => {
        if(err) {
            return res.status(400).json({
                error: 'bad Request !'
            })

            
            }
            res.json({
                cartegory: category
            
            })
    })
}