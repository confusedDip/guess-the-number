const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;
app.listen(port, function(){
        console.log("Listening to PORT " + port);
});

app.get("/", function(req, res){
        res.render('index.ejs');
});

app.get("/:limit", function(req, res){
        const limit = req.params.limit;
        const number = Math.floor(Math.random() * limit);
        const attempts = Math.ceil(Math.log2(limit));
        
        res.render("game.ejs", {
                number: number,
                attempts: attempts,
                limit: limit,
        })
})

app.post("/", function(req, res){
        const limit = req.body.limit;
        res.redirect("/"+limit);
})
