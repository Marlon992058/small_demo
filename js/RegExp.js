$(function(){
	/* RegExp练习  arguments的length总是6
	 * 在string对中，以正则表达式对象为参数的方法
	 * math()
	var glob,num;
	var re = /(.*)@(.*)\.(.*)/;
	var str = "rmmarlon@163.com";
	var callback = function(){
		glob = arguments;
		num = arguments.length;
		return arguments[1] + '\n' + arguments[2] + '\n' +'\t'+ arguments[3]+'good';
	}
	alert(str.replace(re,callback));
	alert(glob+"=="+num);
	*/
	/*匹配内容的数组 string*/
	alert("test".match('t','r'));/*t*/
	alert("test".match(/t/g,'r'));/*t,t*/
	/*将匹配的文本替换为指定的字符串 string*/
	alert("test".replace('t','r'));/*rest*/
	alert("test".replace(/t/g,'r'));/*resr*/
	/*匹配内容所在位置 int*/
	alert("test".search('t','r'));/*0*/
	alert("test".search(/t/g,'r'));/*0*/
});
