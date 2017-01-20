var Sequelize = require('sequelize');
var sequelize;
var env = process.env.NODE_ENV || 'development';

if (env === 'production'){
	sequelize = new Sequelize(prcess.env.DATABASE_URL, {
		'dialect': 'postrges'
	});
} else {
 	sequelize = new Sequelize(undefined, undefined, undefined, {
		'dialect': 'sqlite',
		'storage': __dirname + '/data/dev-todo-api.sqlite'
	});
}
var db ={};

db.todo = sequelize.import(__dirname + '/models/todo.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;