const Pool=require('pg').Pool
const pool=new Pool({
    user:'rabin',
    host:'localhost',
    database:'express',
    password:'test123',
    port:5432
})
module.exports=pool