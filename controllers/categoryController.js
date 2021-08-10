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

exports.showCategory = (req, res)=> {
    res.json({
        category: req.category
    })
} 

exports.categoryId = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {

        if(err || !category) {
            return res.status(404).json({
                error: 'category not found'

            })
        }

        req.category = category;
        next();
    })
}