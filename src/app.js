const express=require("express");
const app=express();
const path=require("path");
const hbs=require('hbs');

// public path
const publicPath=path.join(__dirname,'../public')
//console.log(publicPath)
const templateViewPath=path.join(__dirname,'../templates/views')
//console.log(templateViewPath)
//partial path
const templatepartialPath=path.join(__dirname,'../templates/partial')
//console.log(templatepartialPath)

app.set('view engine','hbs');
app.set("views",templateViewPath)
hbs.registerPartials(templatepartialPath);




// static
//app.use(express.static(publicPath));

// routing
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("error",{
        errorpage:"OOPs This is 404 Error Page"
    });
})

app.listen(4000,()=>{
    console.log("listening the port 4000 !");
})