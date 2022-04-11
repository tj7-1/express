const express= require ('express');
const app= express();
const port= process.env.PORT || 3000;
const path=require("path");
const hbs= require("hbs");

//public static path
const publicPath= path.join(__dirname,"../public");
const templatesPath= path.join(__dirname,"../templates/views");
const partialsPath= path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set('views', templatesPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

//routing
app.get("/",(req,res)=>{
    res.render('index');
});
app.get("/about",(req,res)=>{
    res.render('about');
});
app.get("/weather",(req,res)=>{
    res.render('weather');
});
app.get("*",(req,res)=>{
    res.render('404error');
});
app.listen(port,()=>{
    console.log("listening");
});