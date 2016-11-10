$(function(){

    $(window).resize(function(){
        if($(window).width()<=735){
            $(".header1").css("display","none");
            $(".header2").css("display","block");
            $(".bottom ul").css("display","none");
            $(".bottom h1").css({display:"block",marginTop:0,lineHeight:"40px",marginLeft:"30px",color:"#666",borderBottom:"1px solid #666"})
        }else{
            $(".header1").css("display","block");
            $(".header2").css("display","none");
            $(".bottom ul").css("display","block");
            $(".bottom h1").css({marginTop:'30px',marginLeft:0,color:"none",lineHeight:"20px",borderBottom:"none"});

        }
    });
    $(window).resize();
    /*头部下拉*/
    $(".header2 .btn").click(function(){
        //$(".bannerbox span").slideToggle();
        $(".header2 .btn .son").slideToggle(200);

    })
    /*底部下拉*/
    $(".bottom h1").click(function(){
        $(".bottom ul").eq($(this).index(".bottom h1")).toggleClass("lineH").slideToggle(200);

    })
    /*轮播*/
    var t=setInterval(move,3000);
    var num=0;
    function move(){
        num++;
        if(num==$(".bannerbox .bannerimgbox>.bibox").length-1){
            $(".bannerbox .bannerimgbox").animate({marginLeft:-num*100+"%"},function(){
                $(".bannerbox .bannerimgbox").css({marginLeft:0})
            });
            num=0;
        }else{
            $(".bannerbox .bannerimgbox").animate({marginLeft:-num*100+"%"});
        }

        /*下标按钮*/
        $(".bannerbox .listbtn>ul>li").css({background:"#999",border:"none"}).eq(num).css({background:"none",border:"1px solid #0077cc"})
    }
    /*划上停止*/
   $(".bannerbox").hover(function(){
       clearInterval(t);
   },function(){
       t=setInterval(move,3000);
   })
    /*点击按钮*/
    $(".bannerbox .listbtn>ul>li").finish().click(function(){
        var index=$(this).index(".bannerbox .listbtn>ul>li")
        num=index-1;
        move();
    })
    /*移动端实现滑动*/
    var margin;
    touch.on(".bannerimgbox","dragstart",function(){
         margin=$(".bannerimgbox")[0].offsetLeft;
    })
    touch.on(".bannerimgbox","drag",function(e){
        $(".bannerimgbox").css({marginLeft:margin+ e.x});
    })
    touch.on(".bannerimgbox","dragend",function(e){
        if(Math.abs(e.x)>=700|| e.factor<=5) {
            /*向左*/
            if (e.direction == "left") {
                move();
            }
            /*向右*/
            if (e.direction == "right") {
                moveright()
            }
        }else{
            /*不动*/
            $(".bannerbox .bannerimgbox").animate({marginLeft:-num*100+"%"});
        }
    })

/*清除浏览器默认样式*/
    $(".bannerbox").mousedown(function(e){
        e.preventDefault();
    })
   /*向右移动*/
     function moveright(){
         num--;
         /*下标按钮*/
         $(".bannerbox .listbtn>ul>li").css({background:"#999",border:"none"}).eq(num).css({background:"none",border:"1px solid #0077cc"})

         if(num<=0){
             num=0;
             $(".bannerbox .bannerimgbox").animate({marginLeft:-num*100+"%"});
         }else{
             $(".bannerbox .bannerimgbox").animate({marginLeft:-num*100+"%"});
         }

          }
})