var express =  require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}    
  ]);
});

app.get('/acl', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"name": "Bob Smith","type": "user"},
    {"id": 2,"name": "Tammy Norton","type": "user"},
    {"id": 3,"name": "Tina Lee","type": "user"},
    {"id": 4,"name": "Tony Moore","type": "user"},
    {"id": 5,"name": "Paul Upson","type": "user"},
    {"id": 6,"name": "Investigators","type": "group"},
    {"id": 7,"name": "Homicide","type": "group"},
    {"id": 8,"name": "Robbery","type": "group"},
  ]);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});