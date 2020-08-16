const express = require("express");

const app = express();

app.get("/", (req,res) => res.send("<h1>Welcome</h1>") )

app.get("/mars", (req,res) => res.send('<H2 style="color: red">Welcome to the Red Planet</H2>'))

app.listen(3000, function(){
    console.log("Server started on port 3000")
});
