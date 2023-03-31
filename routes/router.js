const express = require("express")
const bodyParser = require('body-parser')
const { Person } = require('../models/')
// const { Op } = require('sequelize');

let router = express.Router()

router.use(bodyParser.json())
router.get('/', async (req, res) => {
    const models = await Person.findAll()
    res.json(models)
})

router.get('/:id', async (req, res) => {
    const model = await Person.findByPk(req.params.id)
    res.json(model)
})
router.post('/',async (req,res)=>{
    const model= await Person.create(req.body)
    res.json(model)
})
router.put('/:id',async (req,res)=>{
    const model=await Person.findByPk(req.params.id)
    await model.update(req.body)
    res.json(model)
})
module.exports = router