import express from 'express';
import dotenv from "dotenv"
import cors from 'cors';

//import homeRouter from './routes/home.js';
import recipesRouter from './routes/recipes.js';
//import newRouter from './routers/new.js';
//import recipeRouter from './routers/recipe.js';



//const express = require('express');


const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());

dotenv.config()

//const port = process.env.PORT || 5000


//const app = express();
//app.set('view engine','ejs')

//importing routers:
//const homeRouter =require('./routes/home')
//app.use('/', homeRouter);

//const recipesRouter = require('./routes/recipes')
app.use('/recipes', recipesRouter);

//const newRouter=require('./routes/new')
//app.use('/new',newRouter)

//const recipeRouter = require('./routes/recipe')
//app.use('/recipe', recipeRouter)


//app.use(express.urlencoded({extended: true}))
//app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).send('Hi working here...')
})


app.listen(process.env.PORT || 5000, ()=>{console.log("server running on the port")});