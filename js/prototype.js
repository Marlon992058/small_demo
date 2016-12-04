$(function(){
	/*prototype练习*/
	function tmMarlon(name,age){
		this.name = name;
		this.age = age;
		this.message = function(){
			return "My name is:"+this.name + "====== age is :"+ this.age;
		};
	}
	
//	tmMarlon.prototype.hobby = "打篮球，跑步";
//	tmMarlon.prototype.scholl = "陇东学院";
//	tmMarlon.prototype.getInfo = function(){
//		return "scholl ："+ this.scholl+" hobby :"+this.hobby;
//	}
	tmMarlon.prototype = {
		hobby : "打篮球，跑步",
		scholl : "陇东学院",
		getInfo : function(){
			return "scholl ："+ this.scholl+" hobby :"+this.hobby;
		}
	};
	var newtoy = new tmMarlon('marlon',23);
//	alert(newtoy.name+"===="+newtoy.age+"===="+newtoy.message()+"===="+newtoy.hobby+"===="+newtoy.scholl+"===="+newtoy.getInfo());
	tmMarlon.prototype.get = function(what){
		return this[what];
	};
	alert(newtoy.get('name')+"======"+newtoy.get('hobby')+"======"+newtoy.get('scholl'));
});
