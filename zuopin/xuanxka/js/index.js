$(function(){
    var $height=$(".box>dl>dd").outerHeight();
    var $dthg=$(".box>dl>dt").outerHeight();
    $(".box>dl>dt").click(function(){
        var $parent=$(this).parent();
        $parent.toggleClass("hot");
        var $len=$parent.find("dd").length;
        if($parent.hasClass("hot")){
            $(this).css("background","#09F");
            var Hg=$len*$height+$dthg;
            $parent.animate({height:Hg+50},300,function(){
                $parent.animate({height:Hg-20},300,function(){
                    $parent.animate({height:Hg+15},300,function(){
                        $parent.animate({height:Hg},300)
                    })
                })
            })
        }else{
            var that=$(this)
            $parent.animate({height:31},500,function(){
                that.css("background","#9C0");
            })
        }
    })
})