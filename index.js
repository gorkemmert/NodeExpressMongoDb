const express = require('express');
const bodyParser = require('body-parser')
const mongodb = require('./database/mongodb')()
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

const userRoute = require('./routes/User')
const commentsRoute = require('./routes/Comments')


app.use("/user", userRoute);
app.use("/comments", commentsRoute);


app.use

app.listen(3000);

