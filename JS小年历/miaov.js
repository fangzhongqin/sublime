var aInnerText=
[
	"快过年了，大家可以商量着去哪玩吧～",
	"好好学习js技术",
	"注意锻炼身体",
	"努力工作",
	"关爱家人",
	"可以独立写出类似jQuery的小型库（支持各类选择符、事件类、DOM、自定义动画animate、AJAX……",
	"精通JS运动特效技术，能完整实现各类网站所有动画特效",
	"掌握JS调试及优化技术、能兼容所有浏览器",
	"精通JS事件对象及事件的工作机制，并能完成各类跨平台应用模块的开发",
	"能独立开发表现和性能都很优秀的RIA应用",
	"了解后台编程的相关知识，能够和后台工程师配合完成大型交互应用",
	"熟悉正则表达式的编写、应用及高级表单验证技术"
];

window.onload=function ()
{
	var oDiv=document.getElementById('tab');
	var aLiBtn=oDiv.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var i=0;
	
	for(i=0;i<aLiBtn.length;i++)
	{
		aLiBtn[i].onmouseover=select;
	}
};

function select()
{
	var oDiv=document.getElementById('tab');
	var aLiBtn=oDiv.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var oDivContent=oDiv.getElementsByTagName('div')[0];
	var sInnterHtml='';
	var i=0;
	
	for(i=0;i<aLiBtn.length;i++)
	{
		aLiBtn[i].className='';
	}
	
	for(i=0;i<aLiBtn.length;i++)
	{
		if(aLiBtn[i] === this)	//this的序号是i
		{
			aLiBtn[i].className='active';
			
			//修改下部文字
			sInnterHtml="<h2>" + (i+1) + "月活动</h2>";
			sInnterHtml+="<p>" + aInnerText[i] + "</p>";
			
			oDivContent.innerHTML=sInnterHtml;
		}
	}
}
