//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname +"/date.js")

console.log(date)


const app = express();



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))


const items= [];
const workitems = [];




app.get("/", function (req, res) {

    
    const day = date.getdatee();
  res.render("lists", { listtitle: day,newlistitems:items });


});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});



app.post("/",function (req,res) {
    const item =  req.body.newitem;


    if(req.body.list ==="work")
    {
        workitems.push(item)
        res.redirect("/work")
    }
    else{
         item.push(item)
         res.redirect("/")

    }

    items.push(item);
    // console.log(item);
    res.redirect("/");
})

app.get("/work",function (req,res) {
    res.render("lists",{listtitle:"work list",newlistitems:workitems})
})





app.get("/about",function (req,res) {
    res.render("about")
})