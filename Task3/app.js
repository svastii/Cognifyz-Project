const express = require("express");
const path = require("path");


const app = express();
const port = 4000;

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'public')));


app.get("/",(req,res)=>{
     res.render('start.ejs');
});

app.post("/cards",(req,res)=>{
     res.render('card.ejs');
})

app.listen(port,()=>{
     console.log(`Server is running at http://localhost:${port}`)
});