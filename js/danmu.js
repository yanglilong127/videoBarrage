var text;
var _top=10;
var index=0;
$("#submit").click(function(){
	text=$("#text").val();
	if(text=="")
	{alert("您还没有输入评论!")}	
	else{
		$("#zimu").append("<p>"+text+"</p>");
		$("#zimu p").eq(index).css({"top":_top,"color":"#"+getColor()+"","fontSize":""+ziti()+"px"});
		$("#zimu p").eq(index).animate({"left":"-800px"},Math.random()*10000+5000,function(){
			$(this).remove();
			index--;
			});
			index++;
	_top+=40;
	if(_top>300)
		_top=10;
	
	}
});
//获取随机颜色
function getColor(){
	var color=parseInt(Math.random()*16777215).toString(16);
	while(color.length<6){
		color="0"+color;	
	};
	return color;
};
//获取字体大小
function ziti(){
	return parseInt(Math.random()*8)+18;
};

//全屏
$(".but").click(function(){
	$("#video").get(0).webkitRequestFullscreen();	
});