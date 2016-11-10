$(function(){

    var flag=true;
    $(window).scroll(function(){
        /*document.title="fTop:"+$(".twozp")[0].offsetTop+"/sTop:"+$(window).scrollTop();*/

        if($(".threezp")[0].offsetTop<=$(window).scrollTop()&&$(".threezp+.fourzp")[0].offsetTop>=$(window).scrollTop()){
            if(flag){
                /*执行代码*/




    var $CW=$(window).width();
    var $CH=$(window).height();
    var arrh=[];
    var arr=[];
    for(var i=0;i<11;i++){
        var divs=$("<div class='movetiao'>");
        arr.push(divs);
        divs.insertBefore(".threezp .start")
        //divs.appendTo($(".threezp"))
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
    $(".threezp .zhexian").eq(0).css({width:"100px",height:"4px",transition:"width 1s ease 0s"})
    $(".threezp .zhexian").eq(1).css({transform:"rotate(70deg)",transformOrigin:"left",width:"100px",height:"4px",transition:"width 1s ease 1s"})
    $(".threezp .zhexian").eq(2).css({transform:"rotate(-80deg)",transformOrigin:"left",width:"180px",height:"4px",transition:"width 1s ease 2s"})
    $(".threezp .zhexian").eq(3).css({transform:"rotate(70deg)",transformOrigin:"left",width:"100px",height:"4px",transition:"width 1s ease 3s"})
    $(".threezp .zhexian").eq(4).css({width:"440px",height:"4px",transition:"width 3s ease 4s"})

$(".threezp .start .about").css({opacity:1,transition:"opacity 2s ease 2s"})
$(".threezp .start .abou").css({opacity:1,transition:"opacity 2s ease 4s"})
$(".threezp .gerenjianjie").css({opacity:1,transition:"opacity 1s ease 1s"})
$(".threezp .zhaopian").css({opacity:1,transition:"opacity 2s ease 4s"})

                /*执行代码*/
                flag=false
            }
        }else{
            flag=true
        }
    })



})