var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");

var cheerio = require("cheerio");

var db = require("./models");

var app = express();

var PORT = 3333;

//handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static("public"));

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/hwMongo", {
    useMongoClient: true
});

//homepage
app.get("/", function(req, res) {
    res.render("index");
});
  

//reach out to the site, scrape and display articles on page
app.get("/scrape", function(req, res){

    // axios.get("https://www.nytimes.com").then(function(response){

    //     const $ = cheerio.load(response.data);
    const articleArr = [];
    request("https://nbcbayarea.com/news/national-international/", function (error, response, html){
        if(!error  && response.statusCode == 200){
            // console.log(html);

            const result = {}

            const $ = cheerio.load(html);
            $("div.story").each(function(i, element){
                result.headline = $(this).children("h3").children("a").text();
                result.url = $(this).children("h3").children("a").attr("href");
                result.summary = $(this).children("div.summary").text();
                // result.image = $(this).children("div.summary").children("a").children("img").attr("src");

                // articleArr.push(result);
                db.Article.create(result)
                    .then(function(dbArticle){
                        console.log(dbArticle);
                    }).catch(function(err){
                        return res.json(err);
                      })
            
            })
        }
    });
    res.json("Scrape Done");
});

app.get("/articles", function(req, res){
    db.Article.find({})
    .then(function(dbArticle){
        console.log("in find all articles block");
        res.render("index", {articles: dbArticle});
        // res.json(dbArticle);
    }).catch(function(err){
        res.json(err);
       });
})

//add article to saved database
app.post("/addSaved", function(req, res){

});

//retrieve all of the saved articles
app.get("/saved", function(req, res){

});

//retrieve article contents and note
app.get("/articles/:id", function(req, res){

});

//create article note
app.post("/articles/:id", function(req, res){

});

//delete article note
app.delete("/article/:id", function(req, res){

})

app.listen(PORT, function(){
    console.log("Connected on port " + PORT);
});