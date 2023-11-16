const express = require('express')
const router = express.Router()

const People = require('../models/person')

const person = []

router.get('/', async (req, res) => {
    const people = await People.find()
    res.send(people)
})

router.post('/', async (req, res) => {
    const addPerson = await People.create(req.body)
    res.send(addPerson)
})

module.exports = router