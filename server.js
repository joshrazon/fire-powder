const path = require('path');
const express = require('express');
const app = express();
const ejs = require('ejs');


app.set('view engine', 'ejs');


app.get('/',function(request,response){
  // IVAN
  response.render('index',{id: "Fire"})
})

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});



