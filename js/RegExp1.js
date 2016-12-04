$(function(){
	/*
	 * Javascript面向对象编程指南——P150-练习题
	 */
	/*第一题*/
//	function F(){
//		function C(){
//			alert(this);/*window*/
//			return this;
//		}
//		return C();
//	}
//	var o = new F();
//	alert(o);/*window*/
	/*第二题*/
//	function C(){
//		this.a = 1;
//		return false;
//	}
//	console.log(typeof new C());/*object*/
//	console.log(typeof C);/*function*/
//	console.log(typeof C());/*boolean*/
	
	/*第三题*/
	c = [1,2,[1,2]];
	c.sort();
	c.join('--');
	console.log(c);/*[1, Array[2], 2]*/
});
