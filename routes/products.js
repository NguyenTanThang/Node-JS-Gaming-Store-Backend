const Router = require("express").Router();
const Product = require("../models/product");

Router.get("/", (req, res) => {
    let messages = [];

    Product.find({})
    .sort({created_date: -1})
        .then(products => {
            res.json({
                products
            })
        })
        .catch(err => {
            messages.push({
                msg: "Something went wrong when trying to get the data",
                msg_class: "alert-danger"
            })
            res.json({
                messages,
                err
            })
        })
});

Router.post("/add", (req, res) => {
    const {
        productName,
        productPrice,
        productImgURL,
        productDescription
    } = req.body;
    let messages = [];

    // Null Validation
    if (!productName || !productPrice || !productImgURL || !productDescription) {
        messages.push({
            msg: "Missing Credentials",
            msg_class: "alert-danger"
        })
    }

    // Check errors
    if (messages.length > 0) {
        return res.json({
            messages
        });
    }

    // Create a new one
    const newProduct = new Product({
            productName,
            productPrice,
            productImgURL,
            productDescription
        });
        newProduct.save()
        .then((createdProduct) => {
            messages.push({
                msg: "Successfully create a new product",
                msg_class: "alert-success"
            })
            res.json({
                messages,
                createdProduct
            })
        })
        .catch((err) => {
            messages.push({
                msg: "Something went wrong when create a new product",
                msg_class: "alert-danger"
            })
            res.json({
                messages,
                err
            })
        })
})

Router.get("/:id", (req, res) => {
    const id = req.params.id;
    let messages = [];

    Product.findById(id)
        .then(product => {
            res.json({
                product
            })
        })
        .catch(err => {
            messages.push({
                msg: "Something went wrong when trying to get the data",
                msg_class: "alert-danger",
            })
            res.json({
                messages,
                err
            })
        })
});

Router.put("/edit/:id", (req, res) => {
    const id = req.params.id;
    let messages = [];

    Product.findByIdAndUpdate(id, req.body)
        .then(() => {
            messages.push({
                msg: "A product has been updated",
                msg_class: "alert-success"
            })
            Product.findById(id)
            .then(updatedProduct => {
                res.json({
                    messages,
                    updatedProduct
                })
            })
        })
        .catch(err => {
            messages.push({
                msg: "Something went wrong when trying to update the data",
                msg_class: "alert-danger"
            })
            res.json({
                messages,
                err
            })
        })
})

Router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    let messages = [];

    Product.findByIdAndDelete(id)
        .then(deletedProduct => {
            messages.push({
                msg: "A product has been deleted",
                msg_class: "alert-success"
            })
            res.json({
                messages,
                deletedProduct
            })
        })
        .catch(err => {
            messages.push({
                msg: "Something went wrong when trying to delete the data",
                msg_class: "alert-danger",
            })
            res.json({
                messages,
                err
            })
        })
})

Router.get("/by-genres/genres/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const products = await Product.find({});
        const product = await Product.findById(id);
        const {genres} = product;
        let returnedProducts = [];

        for (let i = 0; i < products.length; i++) {
            const productItem = products[i];
            if (productItem.productName == product.productName){
                continue;
            }
            genres.forEach(genreItem => {
                let productItemGenres = productItem.genres;
                productItemGenres = productItemGenres.filter(productItemGenre => {
                    return productItemGenre.genre == genreItem.genre;
                })
                if (productItemGenres.length > 0 && !returnedProducts.includes(productItem)){
                    returnedProducts.push(productItem)
                }
            })
            if (returnedProducts.length >= 3){
                break;
            }
        }

        return res.json({
            products: returnedProducts
        })
    } catch (error) {
        
    }
})

module.exports = Router;