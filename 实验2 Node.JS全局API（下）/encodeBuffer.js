
var arg1 = process.argv[2];
console.log("用户名："+arg1);
var arg1Str = new Buffer(arg1,'base64');
console.log("base64加密："+arg1Str);