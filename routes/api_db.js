var express 		= require('express');
var router 			= express.Router()
var mongojs 		= require('mongojs');

var mongodbString 	= "mongodb://admin_omerf:q1w2e3r4@ds117209.mlab.com:17209/myblogsite";
var db 				= mongojs(mongodbString, ['user_collection']);

db.on('connect', function () {
    console.log('database connected');

});




router.get("/", (req,res) => {

	res.send("This route will connect to db!");

});


router.get("/abc",(req,res)=>{
	res.send("abc route içinde /abc");
})


router.post('/registerNewUser',(req,res)=>{

	console.log("request = " +JSON.stringify(req.body));
	db.mycollection.find(function (err, docs) {
    // docs is an array of all the documents in mycollection 
})
	res.send("Hello!");
});

module.exports = router;