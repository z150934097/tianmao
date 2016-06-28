//兼容的通过类名获取元素集合
function getClass(selector,obj){//IE兼容用ClassName获取的函数
	obj=obj||document;
	if(obj.getElementsByClassName){
	return obj.getElementsByClassName(selector);
	}else{//ie6-8进行处理
		var all=obj.getElementsByTagName('*')
		var arr=[]
		for (var i = 0; i < all.length; i++) {
			if(check(all[i].className,selector)){
				arr.push(all[i])
			}
		};
		return arr;
	}
}
function check(longstr,str){
	var arr=longstr.split(" ")
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]==str){
			return true
		}
	};
	return false
}

//兼容的获取或者设置对象的文本信息
function getText(obj,value){
	if(arguments.length==1){
	if(obj.textContent!=undefined){
		return obj.textContent;
	}else{
		return obj.innerText;
	}
}else if(arguments.length==2){
	if(obj.textContent!=undefined){
	obj.textContent=value;
	}else{
	obj.innerText=value;
	}
}
}

//兼容的获取元素的样式
function getStyle(obj,attr){
	if(!obj.currentStyle){//obj.currentStyle是对象
		return getComputedStyle(obj,null)[attr]
	}else{
		return obj.currentStyle[attr]
	}
}

//获取元素的函数 通过Id class 标签名都能获取
function $(selector,obj){	
	obj=obj||document;	
	if(typeof selector=="string")
	if(selector.charAt(0)=="."){
		return getClass(selector.slice(1),obj)
	}else if(selector.charAt(0)=="#"){
		return obj.getElementById(selector.slice(1))
	}else{
		return obj.getElementsByTagName(selector)
	}else if(typeof selector=="function"){
		window.onload=function (){
			selector()
	}
  }
}

//获取一个元素所有的元素子节点
function getChildren(obj){
	var arr=obj.childNodes;
	var newarr=[]
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].nodeType==1){
			newarr.push(arr[i])
		}
	};
	return newarr
}

function getFirst(obj){
	return getChildren(obj)[0]
}

function getLast(obj){
	var arr=getChildren(obj)
	return arr[arr.length-1]
}

function getNext(obj){
	if(obj.getElementsByClassName){
		return obj.nextElementSibling;
	}else{
		var next=obj.nextSibling;
		if(next==null){
			return null;
		}
		while(next.nodeType!=1){
			next=next.nextSibling
			if(next==null){
			return null;
		}
		}
		return next;
	}
}

function getPrevious(obj){
	if(obj.getElementsByClassName){
		return obj.previousElementSibling;
	}else{
		var previous=obj.previousSibling;
		if(previous==null){
			return null;
		}
		while(previous.nodeType!=1){
			previous=previous.nextSibling
			if(previous==null){
			return null;
		}
		}
		return previous;
	}
}

function insertAfter(newobj,obj){
	var parent=obj.parentNode;
	var next=getNext(obj);
	if(next==null){
		parent.appendChild(newobj)
	}else{
		parent.insertBefore(newobj,next)
	}
}