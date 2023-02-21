const express = require('express')
const router = express.Router()

const Series = require('../../models/series')

const trimArr = (arr) =>{
    return arr.map((item)=>{
        return item.trim()
    })
}

router.get('/', (req,res) => {
    Series.find()
        .then((series)=>{
            res.json(series)
        })
        .catch((err)=>{
            res.status(404).json({mess:'сериалы не нaйдены'})
        })
})
router.get('/:id',(req, res) =>{
    Series.findById(req.params.id)
        .then((series)=>{
            res.json(series)
        })
        .catch((err)=>{
            res.status(404).json({mes:'сериал не найден'})
        })
})
router.post('/', (req,res)=>{
    console.log(req.body)
    const actors = trimArr(req.body.actors.split(','))
    const newSerial = {
        title:req.body.title?req.body.title:"Не задано",
        info:req.body.info?req.body.info:"Не задано",
        cover:req.body.cover?req.body.cover:'http://localhost:8000/static/images/book.jpg',
        reating:req.body.reating?req.body.reating:"Не задано",
        genre:req.body.genre?req.body.genre:"Не задано",
        year:req.body.year?req.body.year:new Date('1111-11-11T03:24:00'),
        country:req.body.country?req.body.country:"Не задано",
        category:req.body.category?req.body.category:"Не задано",
        actors:actors?actors:["Не задано"]
    }
    console.log(newSerial)
    Series.create(newSerial)
        .then((series)=>{
            res.json(series)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json({mes:'фильм не добавлен'})
        })
})
router.delete('/:id', (req,res)=>{
    Series.findByIdAndDelete(req.params.id)
        .then((series)=>{
            res.json(series)
        })
        .catch((err)=>{
            res.status(400).json({mes:'фильм удален'})
        })
})

router.put('/:id', (req, res) => {
    Series.findByIdAndUpdate(req.params.id, req.body)
        .then((series) => {
            res.json(series)
        })
        .catch((err) => {
            res.status(400).json({mes: 'фильм не изменился'})
        })
})



module.exports = router