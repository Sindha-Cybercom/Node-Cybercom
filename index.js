const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    if (req.url = '/') {
        res.end("Hello from the home side");

    } else if (req.url = "/about") {
        res.end("hello from the about side");
    } else if (req.url = '/contact') {
        res.end("hello from the contact side");
    } else if (req.url = '/userapi') {
        fs.readFile(`${__dirname}/simpleapi.json`, "utf-8", (err, data) => {
            console.log(data);
        });
        res.end(data)


    } else {
        res.writeHead(40, { "Content-Type": "text/html" });
        res.end("<h1> 404 error pages. page does not exists </h1>")
    }
});

server.listen(8080, "127.0.0.1", () => {
    console.log("listening to the port no 8080")
});