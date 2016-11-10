$(function(){
    var copy=$(".copy");
    var canvas=$("canvas");
    var w=canvas.parent().width();
    var h=canvas.parent().height();
    canvas.attr({width:w,height:h});
    var cobj=canvas[0].getContext("2d");
    var ndraw=new draw(copy[0],canvas[0],cobj);

    /*图形形状*/
    $(".gongjulan>ul:nth-child(1)>li[data-role]").click(function(){
        if($(this).attr("data-role")!=="pen"){
            ndraw.shapes=$(this).attr("data-role");
            ndraw.draw();
        }else{
            ndraw.pen()
        }

    })
    /*type  填充类型*/
    $(".gongjulan>ul:nth-child(2)>li[data-role]").click(function(){
        ndraw.type=$(this).attr("data-role");
        ndraw.draw();
    })
    /*stroke填充颜色*/
    $(".stroke").change(function(){
        ndraw.strokecolor=$(this).val();
        ndraw.draw();
    })
    /*fill填充颜色*/
    $(".fill").change(function(){
        ndraw.fillcolor=$(this).val();
        ndraw.draw();
    })




    /*橡皮工具*/
    $(".gongjulan>ul:nth-child(5)>li[data-role]").click(function(){
        ndraw.xiangpi($(".xp"));
    })

    /*点击菜单*/
    var menuflag=true;
    $(".menubox>span").click(function(){
        if(menuflag){
            $(".menubox>ul").css({display:"block"})
            menuflag=false
        }else{
            $(".menubox>ul").css({display:"none"})
            menuflag=true
        }
    })
    /*菜单下的按钮*/
    $(".menubox ul li").click(function(){
        var index=$(this).index();
        if(index==0){
            /*新建*/
            var yes=window.confirm("是否保存");
            if(yes){
                location.href=canvas[0].toDataURL().replace("data:image/png","data:stream/octet")
            }
            ndraw.arr=[];
            cobj.clearRect(0,0,w,h);
        }else if(index==1){
            /*保存*/
            location.href=canvas[0].toDataURL().replace("data:image/png","data:stream/octet")
        }else if(index==2){
            /*后退*/
            if(ndraw.arr.length<=0){
                alert("无法后退");
            }else{
                arr=ndraw.arr.pop();
                cobj.clearRect(0,0,w,h);
                cobj.putImageData(ndraw.arr[ndraw.arr.length-1],0,0)
            }
        }if(index==3){
            /*选择*/
            ndraw.slice($(".select"));
        }
    })






})