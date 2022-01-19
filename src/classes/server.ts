import {SolendAction} from './action'
const express = require('express')
const app = express()

//allows server to accept json as the http body
app.use(express.json())

const transactionRouter = require('./routes/transactions')
app.use('/transactions', transactionRouter)

app.listen(3000, () => console.log('server has started'))
console.log("test")