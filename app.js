const express = require('express');
const app = express();
const localPort = 3000;
const availablePort = process.env.PORT
const mongoose = require('mongoose')
const appModules = require('./middleware/appModules')


app.use(appModules)

mongoose.connect('mongodb+srv://admin:admin@cluster0.sxkcx.mongodb.net/sarahahAppDB', { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect('mongodb://localhost:27017/sarahahAppDB', { useNewUrlParser: true, useUnifiedTopology: true })



app.listen(availablePort || localPort, () => console.log("The Server is Up and Running!!"))

