/*1*/
/*兼容IE，js获取class元素。document.getElementsClassName在IE8及以下的版本不支持这种获取方式*/
function getClass(classname,obj){
  /*classname为元素的class，obj为元素的父容器赋予的变量。*/
  var obj=obj||document;
  var arr=[];
  if(obj.getElementsByClassName){
    return obj.getElementsByClassName(classname)
    /*判断浏览器是否支持document的获取方式*/
  }else{
    var tags=obj.getElementsByTagName('*');
    /*获取页面所有标签*/
    for(var i=0;i<tags.length;i++){
      if(checkClass(tags[i].className,classname)){
        arr.push(tags[i]);
        /*遍历判断出所要获取的标签*/
      }
    }
  }
  return arr;
}

function checkClass(str,classname){
  /*这个函数是判断当类名有几个都在一个class里时，这是获取的是一个长字符串*/
  var arr=str.split(" ");
  /*将这个字符串一空格进行分割*/
   for(var i=0;i<arr.length;i++){
    if(arr[i]==classname){
      return true;
    }
   }
   return false;
}


/*2***************************************************************************/

 //关于IE和FF等获取文本不兼容的问题
       // obj：从哪个对象来获取纯文本；
          //   val：要设置的文本

           function getText(obj,val){
      if(val!=undefined){
        if(obj.textContent||obj.textContent==""){
          //FF等浏览器
         obj.textContent=val;
      }else{
         obj.innerText=val;
         //IE
      }
      }else{
      //获取文本
      if(obj.textContent){
        return obj.textContent;
      }else{
        return obj.innerText;
      }
    }
  }


/*3***************************************************************************************************/

//obj代表所要获取的对象名
//attr表示所要获取的属性
//获取样式兼容IE和FF等
    function getStyle(obj,attr){
    if(obj.currentStyle==undefined){
      return window.getComputedStyle(obj,null)[attr];
      //FF等浏览器
    }else{
      return obj.currentStyle[attr];
      //IE
    }
      }

/**4***************************************************************************************************/
//selector表示要获取的方式是那种
//$(".one")     $("#one")            $(div)
function $(selector,father){
  var obj=father||document;
  if(typeof selector=="string"){
    selector=selector.replace(/^\s*|\s*$/g,"");
    if(selector.charAt(0)=="."){
    return getClass(selector.slice(1),obj);
  }else if(selector.charAt(0)=="#"){
    return obj.getElementById(selector.slice(1));
  }else if(/^[a-z|1-10]{1,10}$/g.test(selector)){
    return obj.getElementsByTagName(selector);
  }


  } else if(typeof selector=="function"){
    window.onload=function(){
      selector();
    }
  }
}








/***5********************************************************************/
//获取对象的子节点
function getChilds(obj,type){
  var type=type||"a";
  var childs=obj.childNodes;
  var arr=[];
if(type=="a"){
  for(var i=0;i<childs.length;i++){
    if(childs[i].nodeType==1){
      arr.push(childs[i]);
    }
  }
}else if(type=="b"){
  for(var i=0;i<childs.length;i++){
      if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){
        arr.push(childs[i]);
      }
}
  }
return arr;
}


/**6*********************************************************************/
//获取第一个子节点
function getFirst(obj,type){
   return getChilds(obj,type)[0];
}

/**7*********************************************************************/
//获取最后一个子节点
function getLast(obj,type){
  return getChilds(obj,type)[getChilds(obj,type).length-1];
}

/*8**********************************************************************/
//获取任意节点
function getnum(obj,type,num){
  return getChilds(obj,type)[num];
}


/**9*********************************************************************/
//获取下一个兄弟节点

function getDown(obj){
  var down=obj.nextSibling;
    while(down.nodeType==3||down.nodeType==8){
      down=down.nextSibling;
      if(down==null){
        return false;
      }
    }
  return down
}

/**10*********************************************************************/
//获取上一个兄弟节点

function getUp(obj){
  var up=obj.previousSibling;
  if(up==""){
    return false;
  }
    while(up.nodeType==3||up.nodeType==8){
      up=up.previousSibling;
      if(up==null){
        return false;
      }
    }
  return up
}


/***11********************************************************/
//newobj :要追加的对象
//obj:在那个对象之后
//对象共有的方法一般是加载原型上，而原型只能给构造函数添加，所以共有的方法是添加在对象的构造函数的原型上
//this  ：指的是最终调用这个方法的对象，而这个对象是通过构造函数new出来的
Node.prototype.insertAfter= function(newobj,obj) {
  var down=getDown(obj);
  //获取obj的下一个兄弟节点，
  if(down){
    //如果兄弟节点存在，对象插入其之前
 this.insertBefore(newobj,down);
}else{
  //如果兄弟节点不存在，说明obj对象是最后一个节点。直接追加在父容器的最后
 this.appendChild(newobj);
}

};



/*漂浮广告窗*****12************************************************************************************************/
 //obj:需要漂浮的对象    参数格式   ".one"   "#one"   "div"
        //vx  :水平方向的速度
        //vy  :竖直方向的速度
    function floatwindow(obj,vx,vy){
      var vx=vx||5;
      var vy=vy||5;
    var box=$(obj)[0];
    //获取漂浮的元素
    var clear=getFirst(box);
    //获取关闭按钮的元素,这里是大边框下的第一个元素
/*    var vx=4;
    var vy=10;*/
    var siheight=document.documentElement.clientHeight;
    var siwidth=document.documentElement.clientWidth;
    //屏幕的尺寸
    window.onresize=function(){
      siheight=document.documentElement.clientHeight;
      siwidth=document.documentElement.clientWidth;
    }
    //窗口改变事件    数据要精确，否则不会产生效果
    var t=setInterval(move,30);
    function move(){
              box.style.top=box.offsetTop+vy+"px";
        box.style.left=box.offsetLeft+vx+"px";
        //添加TOP   left    让其移动
      if(box.offsetTop>=siheight-box.offsetHeight){
        box.style.top=siheight-box.offsetHeight+"px";
        //不加初值，会导致滚动条出现造成屏幕扇动
        vy=-1*vy;
      }
      //当元素移动到屏幕下方
      if(box.offsetLeft>=siwidth-box.offsetWidth){
        box.style.left=siwidth-box.offsetWidth+"px";
        vx=-1*vx;
      }
      //当元素移动到屏幕右边
      if(box.offsetTop<=0&&box.offsetLeft!=0){
        box.style.top=0;
        vy=-1*vy;
      }
      //当元素移动到屏幕顶端边
      if(box.offsetLeft<=0&&box.offsetTop!=0){
        box.style.left=0;
        vx=-1*vx;
      }
      //当元素移动到屏幕左边
    }
          box.onmouseover=function(){
            clearInterval(t);
          }
          //鼠标划上浮动暂停
          box.onmouseout=function(){
            t=setInterval(move,30);
          }
          //当鼠标离开，漂浮继续
          clear.onclick=function(){
            document.body.removeChild(box);
          }
          //点击关闭
    }


/*/同一事件绑定多个****13*******************************************************************************************/
//obj:添加事件的对象
        //event:添加的事件。都加on
        //fun:处理程序
    function addEvent(obj,event,fun){
      if(obj.addEventListener){
        event=event.slice(2);
        return obj.addEventListener(event,fun,false);
      }else if(obj.attachEvent){
        return obj.attachEvent(event,fun)
      }
    }
/**14**************************************/    
    //移除事件
    function removeEvent(obj,event,fun){
      if(obj.addEventListener){
        event=event.slice(2);
        return obj.removeEventListener(event,fun,false);
      }else if(obj.attachEvent){
        return obj.detachEvent(event,fun)
      }
    }
/**获取事件对象****15*******************************************************/
function eventObj(e){
return ev=e||window.event;
}

    /**阻止事件流***16***********************************************/
/*obj:   事件对象*/
function stopEvent(obj){
  if(obj.stopPropagation){
    obj.stopPropagation()
    /*FF*/
  }else{
    obj.cancelBubble=true;
    /*IE*/
  }
}


/****事件对象阻止浏览器默认行为***17*****************************************************/
/*obj:事件对象    */
function stopClient(obj){
  if (obj.preventDefault){
    obj.preventDefault(); //阻止默认浏览器动作(W3C)
  }
else{
  obj.returnValue = false;//IE中阻止函数器默认动作的方式
}
}


/****18*******************************************************/
/*鼠标滚轮事件
obj:触发事件源，哪个元素触发
upfun:向上滚动时触发的函数
dowfun:向下滚动时触发的函数
*/
          function mouseWheel(obj,upfun,downfun){
            /*触发鼠标滚轮事件  事件添加处理函数*/
           if(obj.attachEvent){
            obj.attachEvent("onmousewheel",scrollFn);/* IE、 opera*/
            }else if(obj.addEventListener){
            obj.addEventListener("mousewheel",scrollFn,false);
            /*chrome,safari -webkitdocument.*/
            obj.addEventListener("DOMMouseScroll",scrollFn,false);
            /*firefox -moz-*/
            }
            /*兼容*/
            /*事件处理函数*/
            function scrollFn(e){
              var ev=e||window.event;
              if(ev.detail==-3||ev.wheelDelta==120){
                if(upfun){
                upfun.call(obj);  
                }
              }
              /*向上滚动时执行*/
              /*向下滚动时执行*/
              if(ev.detail==3||ev.wheelDelta==-120){
                if(downfun){
                 downfun.call(obj); 
                }
              }

            if (ev.preventDefault )
            ev.preventDefault(); //阻止默认浏览器动作(W3C)
             else
            ev.returnValue = false;//IE中阻止函数器默认动作的方式
    //阻止浏览器的默认     滑动选择文本
           }
    }


/*hover*/
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/***19***检测某个否是数组对象是*************************/ 
/*返回值   true  false*/
function isArray(arr){
    return arr instanceof Array;
   }

/****20***判断是否是某种数据类型********************************************/
/*type=[Object,Array,Number,String,Null,Undefined]*/
function isType(obj,type){
  if(Object.prototype.toString.call(obj)==="[object "+type+"]"){
    return true;
  }
  return false;
}

/***判断是否是数组***************************************/
function isArray(obj){
  return isType(obj,"Array")
}

/***判断是否是对象***************************************/
function isObject(obj){
  return isType(obj,"Object")
}



/**21**************************************/
/*有定位属性的父容器的offset值*/
/*obj对象：查找它的有定位属性的父容器*/
  function offset(obj){
    var parent=obj.parentNode;
    var arr=[];
    var x=0;
    var y=0;
    while(parent.nodeName!="BODY"){
      var styles=getStyle(parent,"position");
      if(styles=="relative"||styles=="absolute"||styles=="fixed"){
        arr.push(parent);
      }
      parent=parent.parentNode;
    }
    for(var i=0;i<arr.length;i++){
      var top=arr[i].offsetTop;
      var left=arr[i].offsetLeft;
      var y=y+top+parseInt(getStyle(arr[i],"borderTopWidth"))
      var x=x+left+parseInt(getStyle(arr[i],"borderLeftWidth"))
    }
    return {left:x,top:y};
  }



 /*AJAX   **22**************************/
  /*options.url;  * 地址     
  options.type;   发送方式
  options.asynh;    同步  异步
  options.date;    {user:"nstblrjg",password:"vtsr"}   user="vrb"&password="bdtshsn"   
  数据
  options.datetype  返回的数据类型 
  options.success=function(){}    *  回掉函数   eval

  jsonp-------------------------------------------------------------------------------
     *options.url;     地址里面不能传callback
     *options.datetype:jsonp
     options.dateCallback:{cb:'?'};
     *options.success:function(){}
*/
function AJAX(options){
     /*处理URL，传送的地址*/
     if(!options.url){
          return;
     };
     /*处理打开或者传送的方式 get或者post*/
     var type=options.type||"get";
     /*同步还是异步   默认异步true*/
     var asynh=options.asynh==undefined?true:options.asynh;
     /*处理数据  要发送的东西*/
     /*返回数据的数据类型*/
    var datetype=options.datetype||"text";
     var date="";
     if(typeof options.date=="string"){
          date=options.date;
     }
     if(typeof options.date=="object"){ 
          for(var i in options.date){
               date+=i+"="+options.date.i+"&";
          }
          date=date.slice(0,-1);
     }
     /*jsonp的执行*/
     if(datetype=="jsonp"){
      var callbackName='callback';
      var callbackvalue="a"+new Date().getTime();
      if(!(options.dateCallback==undefined)){
        for(var i in options.dateCallback){
          callbackName=i;
          callbackvalue=(options.dateCallback[i]=="?"?callbackvalue:options.dateCallback[i])
        }
      }
      /*判断url里面是否存在“？”*/
      var Url="";
      if(options.url.indexOf('?')!=-1){
        /*存在“？”*/
       Url+=options.url+'&'+date+callbackName+'='+callbackvalue;

      }else{
        /*不存在“？”*/
        Url+=options.url+'?'+date+callbackName+'='+callbackvalue;
      }


      window[callbackvalue]=function(value){
        options.success(value)
      }

      var spt=document.createElement("script");
      spt.src=Url;
      alert(Url)
      document.getElementsByTagName('head')[0].appendChild(spt);

      return;
     }
     /**/
     var aj=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
     if(type=="get"){
          aj.open("get",options.url+"?"+date,asynh);
          aj.send();
     }else if(type=="post"){
          aj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
          aj.open("post",options.url,asynh);
        aj.send(date);
     }
    aj.onreadystatechange=function(){
     if(aj.readyState==4){
          if(aj.status==200){
               /*返回的参数类型*/
               if(datetype=="text"){
                    options.success(aj.responseText);
               }
               if(datetype=="xml"){
                    options.success(aj.responseXML);
               }
               if(datetype=="json"){
                    var json=eval("("+aj.responseText+")")
                    options.success(json);
               }
               /**/
          }
     }
    }
}