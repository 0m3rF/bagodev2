var express = require('express');
var mongojs = require('mongojs')
var router = express.Router()



router.get("/", (req,res) => {

	res.send("This route will connect to db!");

});


router.get("/abc",(req,res)=>{
	res.send("deneme route içinde /abc");
})



module.exports = router;