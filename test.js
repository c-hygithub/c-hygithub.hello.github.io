//获取节点
var jsImg=document.querySelector('img');

jsImg.onclick=function(){
	/*
	 * if else进行图片点击切换
	 */
	var jsSrc=jsImg.getAttribute('src');
	/*
	if(jsSrc==='my.jpg'){
		jsImg.setAttribute('src','1.jpg');
	}else if(jsSrc==='1.jpg'){
		jsImg.setAttribute('src','2.jpg');
	}else if(jsSrc==='2.jpg'){
		jsImg.setAttribute('src','3.jpg');
	}else if(jsSrc==='3.jpg'){
		jsImg.setAttribute('src','4.jpg');
	}else if(jsSrc==='4.jpg'){
		jsImg.setAttribute('src','5.jpg');
	}else if(jsSrc==='5.jpg'){
		jsImg.setAttribute('src','my.jpg')
	}else{
		alert('出错了');
	}*/
	/*
	 * for循环进行图片切换
	 */
	
/*	for(var i=1;i<5;i++){
		var n=i;
if(jsSrc===n+'.jpg'){
	n=n+1;
	jsImg.setAttribute('src',n+'.jpg');
	if(n==5){
		n=1;
		jsImg.setAttribute('src',n+'.jpg');
	}
}
	}*/
	/*for(var i=1;i<6;i++){
		
		if(i===i){
			i=i+1;
			jsImg.setAttribute('src',i+'.jpg')
		}else{
			alert("出错了");
		}
		i=i-1;
	}*/
	//利用暂停器进行分步
	//无法使用生成器函数
	//这是一个错误提示。这里语法是正确的
	function * foo(index) {
		  while (index < 6) {
		    yield index++;
		  }
		}
	
	const myiterator= foo(1);
	for(var y=1;y<6;y++){
	var n=myiterator.next().value;
	if(jsSrc===n+'.jpg'){
		if(n===5){
			n=1;
		}
		jsImg.setAttribute('src',(n+1)+'.jpg')
	}
	}
}