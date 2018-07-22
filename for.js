
//获取p节点
var myFor=document.querySelector('p');
//设置点击事件创建无名函数
myFor.onclick=function(){
	for ( var i= 1; i <5; i++) {
		alert('我是'+i);
		for(var j=5;j<8;j++){
			alert("我是"+j);
		}
	}
}