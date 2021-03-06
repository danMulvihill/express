const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.sendFile(__dirname+"/index.html") 
    console.log(__dirname)
})

app.post("/", function(req,res){

    let sum = parseFloat(req.body.num1) + parseFloat(req.body.num2);
    res.send(req.body.num1+" + "+req.body.num2+" = "+sum)
})

app.get("/mars", (req,res) => res.send('<H2 style="color: red">Welcome to the Red Planet</H2>'))

app.get("/jupiter", (q,s) => s.send("<h1 style='font-size: 100px'>Welcome to Jupiter</h1>"))

app.get("/calc"), function(q,s) {
    s.sendFile(__dirname + "/calc.html");
    console.log(__dirname)
}

app.listen(3000, () => console.log("Server started on port 3000") );
