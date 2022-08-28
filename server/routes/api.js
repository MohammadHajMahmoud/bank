const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction.js')

router.get('/transactions', async function (req, res) {
    let transactions = await Transaction.find({})
        res.send(transactions)
})

router.post('/transaction', async function (req, res) {
    const transaction = new Transaction({
        amount: req.body.amount,
        vendor: req.body.vendor,
        category: req.body.category
    })
     await  transaction.save()
    let transactions = await Transaction.find({})
    res.send(transactions)
})

router.delete('/transaction/:id', async function (req, res) {
    const id = req.params.id
    await Transaction.findByIdAndRemove({_id : id})
    let transactions = await Transaction.find({})
        res.send(transactions)
})
router.get('/transactionssum', async  function (req, res) {
     Transaction.aggregate([
        {$group : {_id:"$category", totalAmount:{$sum:"$amount"}}}
    ]).exec(function (err, transactions) {
        if(err){
            res.send('hi')
        }else{
            res.send(transactions)
        }
        
    })})
        

module.exports = router