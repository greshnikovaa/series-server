const mongoose = require('mongoose')


const SeriesSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        default: "Не задано"
    },
    info:{
        type: String,
        default: "Не задано"
    },
    cover:{
        type: String,
        required:true,
        deault:'http://localhost:8000/static/images/book.jpg'
    },
    reating:{
        type: String,
        required: true,
        default: "Не задано"
    },
    genre:{
        type: String,
        default: "Не задано"
    },
    year:{
        type: Date,
        default: "0000-00-00T00:00:00.000Z"
    },
    country:{
        type: String,
        required: true,
        default: "Не задано"
    },
    category:{
        type: String,
        required:true,
        default: "Не задано"
    },
    actors:{
        type: [{
            type: String
        }],
        default: ["Не задано"]
    }
})
module.exports = Series = mongoose.model('series', SeriesSchema)