const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

const app = express();
const port = process.env.PORT ||5000 ; 

app.use(cors());
app.use(express.json());

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-mk5r9.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(()=> console.log("MongoDB Connected."))
    .catch( err =>{
        console.log(err);
    });

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
});