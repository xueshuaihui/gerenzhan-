window.onload=function(){
	var $imgs=$('.box img');
	var len=$imgs.length;
	var $imgW=$imgs.first().width();
	var CX=document.documentElement.clientWidth;
	function sty(){
		$imgs.each(function(i){
		$(this).animate({left:CX/len*i},500);
	     });
	}
	sty();
	$imgs.finish().hover(function(){
		var $img=$(this);
		var left=0;
		$imgs.each(function(i){
			if(i<=$img.index()){
               $(this).finish().animate({left:(CX-$imgW)/(len-1)*i},800);
			}else{

				$(this).finish().animate({left:$imgW+(CX-$imgW)/(len-1)*(i-1)},800);
			}
		})

	},function(){
		sty();
	})
}