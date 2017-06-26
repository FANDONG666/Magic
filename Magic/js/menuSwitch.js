/*左侧导航单切换效果*/
$(function(){
	$('.nav li').hover(function(){
		$(this).css("background","#252f40");
	},function(){
		$(this).css("background","#344053");
	})
})