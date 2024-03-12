const http = require("http");
const url = require("url");
const fs = require("fs");

const address = "127.0.0.1";
const port = 3000;

const mainHtmlPath = "/index.html";

function getResponse(request, response) {

    const urls = url.parse(request.url, true);

    const filePath = __dirname + (urls.pathname === "/" ? mainHtmlPath : request.url);

    fs.readFile(filePath, function (err, data) {
        if (err) {
            console.log(err);
        }
        // response.write(data.toString());
        response.end(data);
    });
}

http.createServer(getResponse).listen(port, address);
console.log(`Server running at http://${address}:${port}`);