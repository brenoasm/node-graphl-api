"use strict";
exports.__esModule = true;
var http = require("http");
var app_1 = require("./app");
var utils_1 = require("./utils/utils");
var server = http.createServer(app_1["default"]);
var port = utils_1.normalizePort(process.env.port || 3035);
server.listen(port, function () {
    var port = server.address().port;
    server.on('error', utils_1.onError(server, port));
});
server.on('listening', utils_1.onListening(server));
