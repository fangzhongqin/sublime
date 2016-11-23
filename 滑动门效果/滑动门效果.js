window.onload=function(){
	// 获取元素
	var box=document.getElementById('container');
	var imgs=document.getElementsByTagName('img');
	// 获取图片宽度
    var imgWidth=imgs[0].offsetWidth;
    // 设置没有被遮盖的图片宽度
    var xianshi=160;

    // 设置容器的宽度
    box.style.width=imgWidth+(imgs.length-1)*xianshi+'px';

// 设置初始图片的位置
	function reSet(){
		for(var i=1;i<imgs.length;i++){
			imgs[i].style.left=imgWidth+xianshi*(i-1)+'px';
		}
	}
	reSet();

	// 设置图片滑动的距离
	var left=imgWidth-xianshi;
	
	// 设置图片滑动
	for(var i=0;i<imgs.length;i++){
		
        (function(i){
          imgs[i].onmouseover=function(){
          	        reSet();
                    for(var j=1;j<=i;j++){
                    	imgs[j].style.left=parseInt(imgs[j].style.left,10)-left+'px';
                    }
          };
        })(i);
	}
}