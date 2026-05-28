const express = require('express')
const db = require('./utils/db-connection')
const port = 3000
const cors = require('cors')

const app = express()

// attaching models
require('./models')


app.use(express.json())
app.use(cors())


//adding routes files
const studentRoutes = require('./routers/studentRoutes')
const identityCardRoutes = require('./routers/identityCardRouter')

app.get('/',(req,res)=>{
    res.send('Hey there welcome to my server!')
})

app.use('/students',studentRoutes)
app.use('/idcard',identityCardRoutes)


db.sync({alter:true})
.then(()=>{
    app.listen(port,()=>{
        console.log('server is listening...!')
    })
})