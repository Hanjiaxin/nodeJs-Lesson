var arg1 = process.argv[2];
if(arg1 == undefined){
	console.log("请传入参数！")
}
else{
	var result = eval(arg1);
	console.log(arg1 + "=%s", result);
}