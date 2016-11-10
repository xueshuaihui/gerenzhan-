$(function(){
    var $CW=$(window).width();
    var $CH=$(window).height();
    $(".onezp .wenzi-box>h6").css({opacity:1})
$(".onezp .wenzi-box>p").css({opacity:1})
$(".onezp .wenzi-box>span").css({opacity:1})


    $(".onezp .zhexian").eq(0).css({width:"100px",height:"4px",transition:"width 1s ease 0s"})
    $(".onezp .zhexian").eq(1).css({transform:"rotate(70deg)",transformOrigin:"left",width:"100px",height:"4px",transition:"width 1s ease 1s"})
    $(".onezp .zhexian").eq(2).css({transform:"rotate(-80deg)",transformOrigin:"left",width:"180px",height:"4px",transition:"width 1s ease 2s"})
    $(".onezp .zhexian").eq(3).css({transform:"rotate(70deg)",transformOrigin:"left",width:"100px",height:"4px",transition:"width 1s ease 3s"})
    $(".onezp .zhexian").eq(4).css({width:"440px",height:"4px",transition:"width 3s ease 4s"})


    $(".onezp-link").click(function(){
        var index=$(this).index(".onezp-link");
        var num=index;
        var top=0;
        var t=setInterval(function(){
            top=top+50;
            if(top>=num*$CH+50){
                top=num*$CH+50;
                $(window).scrollTop(top);
                clearInterval(t)
            }
            $(window).scrollTop(top);
        },30)
    })

    setTimeout(function(){
        $(".onezp  .xinlv-bigbox .zhezhao").css({border:"none"})
        $(".onezp .oneconbox .baikuang .xinlv-bigbox .wenzi-box").css({transition:"width 5s ease",width:"700px"})
    },3000)

})