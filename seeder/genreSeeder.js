const mongoose = require("mongoose");
const Genre = require("../models/Genre");
const config = require("../config/config");

mongoose.connect(config.MONGODB_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log("we are connected")})
    .catch(err => console.log(err));

    const genres = [
        new Genre({
            genre: "Horror"
        })
    ]
/*
const genres = [
    new Genre({
        genre: "Action"
    }),
    new Genre({
        genre: "Sport"
    }),
    new Genre({
        genre: "Roleplay"
    }),
    new Genre({
        genre: "Statergy"
    }),
]
*/


let counter = 0;
genres.forEach(genre => {
    genre.save()
    .then((createdGenre) => {
        counter++;
        console.log(counter);
        if (counter == genres.length){
            mongoose.disconnect();
        }
    }).catch(err => console.log(err));
});

module.exports = () => {
    console.log("Commit");
}

