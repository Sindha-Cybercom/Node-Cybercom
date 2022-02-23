const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.send("Welcome to my website")
});
app.get("/about", function(req, res) {
    res.send("i am web devloper ")
});
app.get("/contactus", function(req, res) {
    res.send("if you have any query contct me on email")
});

app.get("/calculator", function(req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/calculator", function(req, res) {
    res.send(req.body)

    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);

    let sum = n1 + n2;
    res.send("The Sum is" + sum);

})

app.listen(5000, function(req, res) {
    console.log("server running at 5000")
});