const Router = require("express").Router();
const Genre = require("../models/Genre");

Router.get("/", (req, res) => {
    let messages = [];

    Genre.find({})
        .then(genres => {
            res.json({
                genres
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

module.exports = Router;