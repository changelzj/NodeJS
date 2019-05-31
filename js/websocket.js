var WebSocketServer = require('ws').Server;

var ws = new WebSocketServer({port:9000});
var clientMap = {};

ws.on('connection', function (ws) {
    console.log(ws + '上线');
    clientMap[ws.name] = ws;
});

ws.on('message', function (message) {
    for (key in clientMap) {
        clientMap[key].send(message);
    }
});

ws.on('close', function (ws) {

});

