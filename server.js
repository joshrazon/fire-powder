const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index', {data: {title: "Anything"}});
})

app.use('/', express.static(path.join(__dirname, '/public')));

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});


