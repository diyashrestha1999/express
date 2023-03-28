const express=require("express")
let router=express.Router()
router.route('/greeting')
    .get((req, res) => {
        // /diya/greeting
        res.send('hello diya!')})
    .post((req, res) => {res.send('this is post method')})

module.exports=router