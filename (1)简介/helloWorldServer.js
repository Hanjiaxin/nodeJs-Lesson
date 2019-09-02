const http = require("http");
var server = new http.Server();
server.on("request",function (req,res) {
	res.end("Hello world!");
});
server.listen(8080);

