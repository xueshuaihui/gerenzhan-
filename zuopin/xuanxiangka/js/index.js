$(function(){
	var $width=$('.bigbox .box>img').first().width();
	/*获取图片的宽度*/
	var $boxW=$('.box').first().width()
	/*获取box的默认宽度*/

	var $imgs=$(".bigbox .box>img");
	$imgs.each(function(){
		$(this).css('left',-$(this).parent('.box').parent('li').position().left+'px')
	})
	/*图片定位*/
	var $box=null;
	var $img=null;
	/*定义当前的box和img*/
	var $boxL=0;
	var $imgL=0
	/*定义当前box和img的定位*/

    $('.link li').finish().hover(function(){
    	$box=$(this).find('.box');
    	$img=$box.find('img');
    	$boxL=$(this).position().left;
    	$imgL=-$boxL;
    	$box.css('z-index',20);
    	$img.finish().animate({left:0},300)
    	$box.finish().animate({width:$width,left:-$boxL},300);
    },function(){
    	$img.finish().animate({left:$imgL},300);
    	$box.finish().animate({left:0,width:173,zIndex:0},300);
    })
})