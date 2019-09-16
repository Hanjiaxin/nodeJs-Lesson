const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer(function (req,res) {
	var imgPath = path.join(__dirname,"/images/aa.png");
	var imgBuffer = fs.readFileSync(imgPath);
	var base64Data = imgBuffer.toString("base64");
	var imgStr = "data:image/jpg;base64,"+base64Data;
	var htmlStr = "<!DOCTYPE html><head></head>"
		+"<html><body><img src='+imgStr+'></body>"+"</html>";
	res.writeHead(200, {"Content-Type": "Text/html"});
	res.write(htmlStr);
	res.end();
}).listen(8081);
console.log("server is listening!");