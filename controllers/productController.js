const Product = require('../models/product');
const formidable = require('formidable')
const fs = require('fs')
const Joi = require('joi');


exports.createProduct = (req, res) => {

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, async(err, fields, files) => {

        if(err){ 
            return res.status(400).json({
                error: 'Image could not uploaded !'
            })
        }

        let product = new Product(fields);

        if(fields.photo){
             if(files.photo.size > Math.pow(10, 6)) {
                 return res.status(400).json({
                     error: 'Image should be less than 1mb in size'
                 })
             }
            product.photo.data = fs.readFileSync(files.photo.path)
            product.photo.contentType = files.photo.type
        }

        photo.save((err, product) => {
            if(err) {
                return res.status(400).json({
                    err: 'Product not persist'
                })
               
                }
            res.json({
                product: product
                
                
            })
        })
    })
}