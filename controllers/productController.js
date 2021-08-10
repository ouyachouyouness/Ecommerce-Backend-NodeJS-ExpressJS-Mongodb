const Product = require('../models/product');
const formidable = require('formidable')
const fs = require('fs')
const Joi = require('joi')
const _ = require('lodash')

exports.createProduct = (req, res) => {

    //console.log(req);

    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {

        // Wast l Callback
        if (err) {
            return res.status(400).json({
                error: 'Image could not uploded !'
            })
        }

        let product = new Product(fields);

        if (fields.photo) {

            if(files.photo.size > Math.pow(10, 6)){
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                })
            }

            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;

        }
        const schema = Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.required(),
            quantity : Joi.required(),
            category: Joi.required()


        })

        const { error } = schema.validate(fields)

        if(error){
            return res.status(400).json({
                error: error.details[0].message
            })
        }
     

        product.save((err, product) => {
            if(err) {
                return res.status(400).json({
                    error: 'bad Request !'
                })
    
                
                }
                res.json({
                    product: product
                
                })
        })

    });
}

exports.productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {

        if(err || !product) {
            return res.status.json({
                error: 'Product not found'

            })
        }

        req.product = product;
        next();
    })
}

exports.showProduct = (req, res) => {
    
    //req.product.photo = undefined;
    
    res.json({
        product: req.product
    })
}

exports.removeProduct = (req, res) => {
    let product = req.product

    product.remove((err, product) => {
        if(err){
            return res.status(404).json({
                error : "Product not found ! "
            })
        }

        res.status(204).json({
            message: "Product deleted",
        })
    })
}

exports.updateProduct = (req, res) => {

    //console.log(req);

    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {

        // Wast l Callback
        if (err) {
            return res.status(400).json({
                error: 'Image could not uploded !'
            })
        }

        let product = req.product;
        product = _.extend(product, fields)



        if (fields.photo) {

            if(files.photo.size > Math.pow(10, 6)){
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                })
            }

            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;

        }
        const schema = Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.required(),
            quantity : Joi.required(),
            category: Joi.required()


        })

        const { error } = schema.validate(fields)

        if(error){
            return res.status(400).json({
                error: error.details[0].message
            })
        }
        

        product.save((err, product) => {
            if(err) {
                return res.status(400).json({
                    error: 'bad Request !'
                })
    
                
                }
                res.json({
                    product: product
                
                })
        })

    });
}
