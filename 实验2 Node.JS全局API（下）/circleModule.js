function circleFun(r) {
	function circumFerence() {
		return 2*Math.PI*r;
	}
	function area() {
		return Math.PI*r*r;
	}
}
/**
* 1.nrm用来切换第三方模块的下载的服务器想
* （一个网速较慢，原来的服务器上不存在该模块）
* 2.install date-now在当前目录安装，模块会被添加到node_modules
* install date-now -g 全局安装
* 3.nvmw进行node版本管理的工具
* nvmw install node版本号
* nvmw ls显示所有安装的node版本号
*/