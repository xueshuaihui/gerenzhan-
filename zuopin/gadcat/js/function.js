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


/****************************************************************************/

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


/****************************************************************************************************/

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

/*****************************************************************************************************/
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




/***********************************************************************/
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


/***********************************************************************/
//获取第一个子节点
function getFirst(obj,type){
   return getChilds(obj,type)[0];
}

/***********************************************************************/
//获取最后一个子节点
function getLast(obj,type){
  return getChilds(obj,type)[getChilds(obj,type).length-1];
}

/***********************************************************************/
//获取任意节点
function getnum(obj,type,num){
  return getChilds(obj,type)[num];
}


/***********************************************************************/
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

/***********************************************************************/
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


/***********************************************************/
//newobj :要追加的对象
//obj:在那个对象之后
//对象共有的方法一般是加载原型上，而原型只能给构造函数添加，所以共有的方法是添加在对象的构造函数的原型上
//this  ：指的是最终调用这个方法的对象，而这个对象是通过构造函数new出来的
Object.prototype.insertAfter= function(newobj,obj) {
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



/*漂浮广告窗*****************************************************************************************************/
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


/***********************************************************/
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
                upfun();  
                }
              }
              /*向上滚动时执行*/
              /*向下滚动时执行*/
              if(ev.detail==3||ev.wheelDelta==-120){
                if(downfun){
                 downfun(); 
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
/*******************************/ 



















