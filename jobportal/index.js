const express = require('express');
const port = 8000;
const app =express();
const db = require('./config/mongoose');
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout);
app.set('view engine','ejs');
app.set('views','view');

app.use('/',require('./router'));
app.listen(port,(err) =>{
    if(err){
        console.log('error in running server',err);
        return;
    }
    console.log(`Express server up on port ${port}`);
})