const express = require('express')
const postsModel = require('../models/postsModel')


const router = express.Router()

router.get('/PostView', async (req, res) => {
    try {
        const posts = await postsModel.find()
        res.status(200).json({ posts })
    }
    catch (e) {
        if (e) { res.status(500).json({ message: e.message }) }
    }
})

module.exports=router