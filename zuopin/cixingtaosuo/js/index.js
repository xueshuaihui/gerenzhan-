$(function(){
	var $opacity=$('.opacity');
	/*获取遮照*/
	var flag=false;

	$('.box').hover(function(){
		var $imgnow=$(this);
		var left=$imgnow.position().left;
		var top=$imgnow.position().top;
		/*获取鼠标指上的图片位置*/
		if($opacity.css('display')==='none'){
			$opacity.css({display:'block'});
		}
		/*显示遮照*/

		if(!flag){
			var imgW=$imgnow.width();
			var imgH=$imgnow.height();
			$opacity.stop(true).animate({width:imgW,height:imgH,left:left,top:top},200,function(){
				flag=true;
			});	
	    }
	    /*遮照初次定位*/
		if(flag){
			$opacity.stop(true).animate({left:left,top:top},200)
		}
		/*遮照移动*/
		
		
	})
})