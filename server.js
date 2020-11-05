const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// The standard HTTP methods
app.get('/',function(request,response){
  console.log(request.method);

  // response is magically turned into JSON. express middlewares are the bees knees
  response.send({name: 'Josh', age: 24});
});

app.post('/',function(request,response){
  response.send('POST request: Create data');
});

app.put('/',function(request,response){
  response.send('PUT request: Update data');
});

app.delete('/',function(request,response){
  response.send('DELETE request: Delete data');
});

app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});


