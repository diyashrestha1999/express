const express = require('express')
const app = express()
const port = 3000
const diya=require("./routes/diya")
app.use('/diya',diya)
app.listen(port, () => console.log(`listening to port ${port}`))
app
    .route('/')
    .get((req, res) => {res.send('hello world!')})

