
var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end("666");
});

server.listen(8089);



