const express = require('express')
const app = express()
// const sequelize = require('./db.js')
const port = 3000
const router = require('./routes/router')
const userRouter = require('./routes/user')
const addressRouter = require('./routes/address')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
const { sequelize } = require('./models');

(async () => {
    await sequelize.sync({ alter: true });
    console.log('Migration done!');
})();


app.use('/models', router)
app.use('/users', userRouter)
app.use('/address', addressRouter)


app.listen(port, () => console.log(`listening to port ${port}`))


