const express =require ('express');
const app =  express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('port',(process.env.port )|| 3000 )

app.listen(app.get('port'),()=>{
  console.log('express listen on port 3000 ')
})
