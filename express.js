const express = require('express')
const app = express()
const sequelize = require('/db.js')
sequelize.sync();
const port = 3000
const router = require('./routes/router')
app.use('/models', router)
app.listen(port, () => console.log(`listening to port ${port}`))


