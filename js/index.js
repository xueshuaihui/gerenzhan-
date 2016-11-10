$(function(){
    var $CW=$(window).width();
    var $CH=$(window).height();
    /*首页*/
    var num=0;
    function up(){
        var top = $(window).scrollTop();
        num = Math.ceil(top / $CH)
        num--;

        var t = setInterval(function () {
            top = top - 20;
            if (top <= (num) * $CH - 50) {
                top = num * $CH - 50;
                $(window).scrollTop(top);
                clearInterval(t)
            }
            $(window).scrollTop(top)
        }, 30)

    };
    function down(){
        var top=$(window).scrollTop();
        num=Math.floor(top/$CH)
        num++;

        var t=setInterval(function(){
            top=top+20;
            if(top>=num*$CH+50){
                top=num*$CH+50;
                $(window).scrollTop(top);
                clearInterval(t)
            }
            $(window).scrollTop(top);
        },30)

    }

$(window).mouseWheel(function(){
    up()
},function(){
    down()
});
$(".xiyiye").click(function(){
down();
    })




        //var flag=true;
        //$(window).scroll(function(){
        //    /*document.title="fTop:"+$(".twozp")[0].offsetTop+"/sTop:"+$(window).scrollTop();*/
        //
        //    if($(".threezp")[0].offsetTop<=$(window).scrollTop()&&$(".threezp+.fourzp")[0].offsetTop>=$(window).scrollTop()){
        //        if(flag){
        //           /*执行代码*/
        //            /*执行代码*/
        //            flag=false
        //        }
        //    }else{
        //        flag=true
        //    }
        //})






})