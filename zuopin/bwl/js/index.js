$(function(){
    /*自定义拖拽*/
    $(document).on("mousedown",function(e){
        var ox= e.offsetX;
        var oy= e.offsetY;
        $(document).on("mousemove",function(e){
            var cx= e.clientX;
            var cy= e.clientY;
            var target= e.target;
            $(target).trigger("drag",{ox:ox,oy:oy,cx:cx,cy:cy});
            $(document).on("mouseup",function(){
                $(document).off("mousemove");
                $(document).off("mouseup");
            })
        })
    })



    var $add=$(".add");
    var $form=$(".formbox");
    var arr=localStorage.arr==null?[]:localStorage.arr.split(",");
    /*存放存储的名称的*/
    $add.click(function(){
        $form.css("display","block")
        })
        /*提交数据*/
        $(".formbox .btn").click(function(){
            var $tvl=$(".text").val()
            var $cvl=$(".textareabox").val();
            $cvl=$cvl.replace(/^\s*|\s*$/g,"");
            var $date=$(".date").val();
            if($tvl==""){
                $(".formbox .box .textspan").css("display","block");
                return;
            }else{
                $(".formbox .box .textspan").css("display","none");
            }
            if($cvl==""){
                $(".formbox .box .textareaspan").css("display","block");
                return;
            }else{
                $(".formbox .box .textareaspan").css("display","none");
            }
            /*正则验证是否有数据*/
            var str=JSON.stringify({title:$tvl,con:$cvl,date:$date})
            var name=new Date().getTime();
            var arr=localStorage.arr==null?[]:localStorage.arr.split(",");
            arr.push(""+name+"");
            localStorage[""+name+""]=str;
            /*存放每条信息*/
            var str1=arr.join();
            //var str1=toString(arr);
            localStorage.arr=str1;
            /*存放信息的title*/
            clone(name);
            /*显示在页面*/
            /*清空   隐藏form*/
            $(".text").val("")
            $(".textareabox").val("");
            $form.css("display","none")
    })
    /*点击关闭按钮*/
    $(".closeform").click(function(){
        /*清空   隐藏*/
        $(".text").val("")
        $(".textareabox").val("");
        $form.css("display","none")
    })
/*读取存储的数据   随机显示在网页上*/
    function clone(obj){
        var str=localStorage[obj];
        var jsons=JSON.parse(str);
        /*获取信息转换为JSON*/
        var $conbox=$(".conbox:first").clone()
        /*克隆*/
        var CW=$(window).width();
        var CH=$(window).height();
        var ow=$(".conbox").outerWidth();
        var oh=$(".conbox").outerHeight();
        var topH=$(".top").outerHeight();
        var left=Math.random()*(CW-ow)+"px";
        var top=Math.random()*(CH-oh-topH)+topH+"px";
        $conbox.appendTo("body").css({display:"block",left:left,top:top})
        /*放置*/
        $conbox.find(".title-con").html(""+jsons.title+"")
        $conbox.find(".con").html(""+jsons.con+"")
        $conbox.find(".date-con").html(""+jsons.date+"")
        /*填写信息*/
        $conbox.attr({name:obj})
        $conbox.on("drag",function(e,data){
            $(this).css({left:data.cx-data.ox,top:data.cy-data.oy})
        })
    }
    /*页面加载时显示*/
    for(var i=0;i<arr.length;i++){
        clone(arr[i]);
    }

/*删除信息*/
    $("body").delegate(".closeconbox","click",function(){
        var parent=$(this).parent();
        var name=parent.attr("name");
        parent.remove();
        /*页面删除*/
        var arr1=localStorage.arr.split(",");
        for(var i=0;i<arr1.length;i++){
            if(arr1[i]==name){
                arr1.splice(i,1)
                if(arr1.length==0){
                    localStorage.removeItem("arr");
                }
               localStorage.arr=arr1;
                break;
            }
        }

        /*数据库中删除*/
        localStorage.removeItem(name);
    })




})