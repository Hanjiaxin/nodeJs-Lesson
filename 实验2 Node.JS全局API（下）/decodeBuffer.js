var base64Str = 'emhhbmdzYW46MTIzNDU2';
var buffer1 = new Buffer(base64Str,'utf-8');
var buffer2 = new Buffer(base64Str, 'base64').toString();
console.log(buffer2);