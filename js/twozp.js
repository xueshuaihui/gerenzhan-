$(function(){

        var flag=true;
        $(window).scroll(function(){
            /*document.title="fTop:"+$(".twozp")[0].offsetTop+"/sTop:"+$(window).scrollTop();*/

            if($(".twozp")[0].offsetTop<=$(window).scrollTop()&&$(".twozp+.threezp")[0].offsetTop>=$(window).scrollTop()){
                if(flag){
                    /*执行代码*/





    var $CW=$(window).width();
    var $CH=$(window).height();
    var arrh=[];
    var arr=[];
    for(var i=0;i<11;i++){
       var divs=$("<div class='movetiao'>");
        arr.push(divs);
        divs.insertBefore(".twozp .start")
        //divs.appendTo($(".twozp"))
        arrh.push($(".movetiao:last").height())
    }
    /*创建移动条*/
    for(var j=0;j<arr.length;j++){
        arr[j].css("height",0)
        /*隐藏移动条*/
        setTimeout(function(){
            for(var i=0;i<arr.length;i++){
                arr[i].css({height:arrh[i],transition:"height 2s ease 1s"})
            }
            /*显示移动条*/
        })
    }


/*折线*/
    $(".twozp .zhexian").eq(0).css({width:"100px",transition:"width 1s ease 0s"})
    $(".twozp .zhexian").eq(1).css({transform:"rotate(70deg)",transformOrigin:"left",width:"100px",transition:"width 1s ease 1s"})
    $(".twozp .zhexian").eq(2).css({transform:"rotate(-80deg)",transformOrigin:"left",width:"180px",transition:"width 1s ease 2s"})
    $(".twozp .zhexian").eq(3).css({transform:"rotate(70deg)",transformOrigin:"left",width:"100px",transition:"width 1s ease 3s"})
    $(".twozp .zhexian").eq(4).css({width:"500px",transition:"width 3s ease 4s"})
    $(".twozp .zhexian").eq(5).css({transform:"rotate(70deg)",transformOrigin:"left",width:"100px",transition:"width 1s ease 7s"})
    $(".twozp .zhexian").eq(6).css({transform:"rotate(-80deg)",transformOrigin:"left",width:"180px",transition:"width 1s ease 8s"})
    $(".twozp .zhexian").eq(7).css({transform:"rotate(70deg)",transformOrigin:"left",width:"100px",transition:"width 1s ease 9s"})
    $(".twozp .zhexian").eq(8).css({width:"100px",transition:"width 1s ease 10s"})

     $(".twozp .zuopin a").each(function(index,obj){
         $(this).css({background:"url('image/zuopin/"+index+".jpg') no-repeat center",backgroundSize:"contain"})
     })


    $(".twozp .start .work").css({opacity:1,transition:"opacity 2s ease 5s"})
    $(".twozp .start .zpzs").css({opacity:1,transition:"opacity 2s ease 6s"})
    $(".twozp .zuopin").css({opacity:1,transition:"opacity 2s ease 6s"})



                    /*执行代码*/
                    flag=false
                }
            }else{
                flag=true
            }
        })


})