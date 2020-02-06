const Router = require("express").Router();
const TestOrders = require("../models/test-orders");

Router.post("/add", (req, res) => {
    const {total, items, user_id} = req.body;
    let messages = [];

    // Null Validation
    if (!total || !items || !user_id){
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

    new TestOrders({
        total, items, user_id
    }).save()
    .then(createdOrder => {
        messages.push({
            msg: "Successfully create a new order",
            msg_class: "alert-success"
        })
        res.json({
            messages,
            createdOrder
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

Router.get("/", (req, res) => {
    let messages = [];

    TestOrders.find({})
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

Router.get("/:id", (req, res) => {
    const id = req.params.id;
    let messages = [];

    TestOrders.findById(id)
        .then(order => {
            res.json({
                order
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

Router.get("/all/:user_id", (req, res) => {
    const id = req.params.user_id;
    let messages = [];

    TestOrders.find({user_id: id})
        .then(orders => {
            res.json({
                orders
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

module.exports = Router;