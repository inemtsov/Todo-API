var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;
app.use(bodyParser.json());
app.get('/', function(req, res){
	res.send('Todo API root');
});

app.get('/todos', function(req, res){
	res.json(todos);
});

app.get('/todos/:id', function(req, res){
	var todoId = parseInt(req.params.id, 10);
	var matched;
	for(var i = 0; i<todos.length; i++){
		if (todoId === todos[i].id){
			matched = todos[i];
		}
	}
	if(matched){
		res.json(matched);
	}else{
		res.status(404).send();
	}
});

app.post('/todos', function(req, res){
	var body = req.body;
	body.id = todoNextId;
	todoNextId++;
	todos.push(body);
	res.json(body);

});

app.listen(PORT, function(){
	console.log('Express listening on port ' + PORT + '!');
});