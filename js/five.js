$(function(){

    var flag=true;
    $(window).scroll(function(){
        /*document.title="fTop:"+$(".twozp")[0].offsetTop+"/sTop:"+$(window).scrollTop();*/

        if($(".fivezp")[0].offsetTop<=$(window).scrollTop()&&$(".fivezp+.sixzp")[0].offsetTop>=$(window).scrollTop()){
            if(flag){
                /*执行代码*/

                zhixing()
                /*执行代码*/
                flag=false
            }
        }else{
            flag=true
        }
    })

$(".fivezp .start .work").css({transition:"opacity 1s ease 3s",opacity:1})
$(".fivezp .start .zpzs").css({transition:"opacity 1s ease 3s",opacity:1})





    function  zhixing() {


        var width = $(window).width();
        var height = $(window).height();


        /*折线*/
        $(".fivezp .zhexian").eq(0).css({width: "100px", transition: "width 1s ease 0s"})
        $(".fivezp .zhexian").eq(1).css({
            transform: "rotate(70deg)",
            transformOrigin: "left",
            width: "100px",
            transition: "width 1s ease 1s"
        })
        $(".fivezp .zhexian").eq(2).css({
            transform: "rotate(-80deg)",
            transformOrigin: "left",
            width: "180px",
            transition: "width 1s ease 2s"
        })
        $(".fivezp .zhexian").eq(3).css({
            transform: "rotate(70deg)",
            transformOrigin: "left",
            width: "100px",
            transition: "width 1s ease 3s"
        })
        $(".fivezp .zhexian").eq(4).css({width: "500px", transition: "width 3s ease 4s"})
        $(".fivezp .zhexian").eq(5).css({
            transform: "rotate(70deg)",
            transformOrigin: "left",
            width: "100px",
            transition: "width 1s ease 7s"
        })
        $(".fivezp .zhexian").eq(6).css({
            transform: "rotate(-80deg)",
            transformOrigin: "left",
            width: "180px",
            transition: "width 1s ease 8s"
        })
        $(".fivezp .zhexian").eq(7).css({
            transform: "rotate(70deg)",
            transformOrigin: "left",
            width: "100px",
            transition: "width 1s ease 9s"
        })
        $(".fivezp .zhexian").eq(8).css({width: "100px", transition: "width 1s ease 10s"})

        /*进度*/
//x,y 坐标,radius 半径,process 百分比,backColor 中心颜色, proColor 进度颜色, fontColor 中心文字颜色,num  第几个画板上，text  进度条的类型（属于html）
/*        function DrowProcess(x, y, radius, process, backColor, proColor, fontColor, num, text) {
            var canvas = document.getElementsByClassName('myCanvas')[num];
            if (canvas.getContext) {
                var cts = canvas.getContext('2d');
            } else {
                return;
            }

            cts.beginPath();
            // 坐标移动到圆心
            cts.moveTo(x, y);
            // 画圆,圆心是24,24,半径24,从角度0开始,画到2PI结束,最后一个参数是方向顺时针还是逆时针
            cts.arc(x, y, radius, 0, Math.PI * 2, false);
            cts.closePath();
            // 填充颜色
            cts.fillStyle = backColor;
            cts.fill();

            cts.beginPath();
            // 画扇形的时候这步很重要,画笔不在圆心画出来的不是扇形
            cts.moveTo(x, y);
            // 跟上面的圆唯一的区别在这里,不画满圆,画个扇形
            cts.arc(x, y, radius, Math.PI * 1.5, Math.PI * 1.5 - Math.PI * 2 * process / 100, true);
            cts.closePath();
            cts.fillStyle = proColor;
            cts.fill();

            //填充背景白色
            cts.beginPath();
            cts.moveTo(x, y);
            cts.arc(x, y, radius - (radius * 0.26), 0, Math.PI * 2, true);
            cts.closePath();
            cts.fillStyle = 'rgba(255,255,255,1)';
            cts.fill();

            // 画一条线
            cts.beginPath();
            cts.arc(x, y, radius - (radius * 0.30), 0, Math.PI * 2, true);
            cts.closePath();
            // 与画实心圆的区别,fill是填充,stroke是画线
            cts.strokeStyle = backColor;
            cts.stroke();

            //在中间写字
            cts.font = "bold 9pt Arial";
            cts.fillStyle = fontColor;
            cts.textAlign = 'center';
            cts.textBaseline = 'middle';
            cts.moveTo(x, y);
            cts.fillText(text, x, y - 10);
            cts.fillText(process + "%", x, y + 10);

        }*/

/*        bfb = 0;
        time = 0;
        (function Start() {
            DrowProcess(60, 60, 55, bfb, '#ddd', '#6495ED', '#6495ED', 0, "html");
            DrowProcess(200, 60, 55, bfb, '#ddd', '#FF7F50', '#FF7F50', 0, "css");
            DrowProcess(60, 60, 55, bfb, '#ddd', '#e74c3c', '#e74c3c', 1, "javascript");
            DrowProcess(200, 60, 55, bfb, '#ddd', '#6495ED', '#6495ED', 1, "jquery");
            DrowProcess(60, 60, 55, bfb, '#ddd', '#FF7F50', '#FF7F50', 2, "html5");
            DrowProcess(200, 60, 55, bfb, '#ddd', '#e74c3c', '#e74c3c', 2, "css3");
            t = setTimeout(Start, 60);

            if (bfb >= 80) {
                clearTimeout(t);
                bfb = 0;
                return;
            }
            bfb += 1;
        })()*/
        var t=0;
$(".fivezp .jindu a").each(function(index,obj){
    $(this).css({transition:"opacity 1s ease "+(index)+"s",opacity:1})
})







    var turn = function(target,time,opts){
        target.find('a').hover(function(){
            $(this).find('img').stop().animate(opts[0],time,function(){
                $(this).hide().next().show();
                $(this).next().animate(opts[1],time);
            });
        },function(){
            $(this).find('.info').animate(opts[0],time,function(){
                $(this).hide().prev().show();
                $(this).prev().animate(opts[1],time);
            });
        });
    }
    var verticalOpts = [{'width':0},{'width':'100px'}];
    turn($('#vertical'),100,verticalOpts);
    var horizontalOpts = [{'height':0,'top':'120px'},{'height':'140px','top':0}];
    turn($('#horizontal'),100,horizontalOpts);




    }



})