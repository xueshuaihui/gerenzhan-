$(function(){
  /*热门*/
   var remenNrCenter=$(".remen-nr-center")[0];
  var remenUl=$(".remen-ul")[0];
  var remenLis=$("li",remenUl);
  var renmenTwoOne=$(".renmen-two-one")[0];

  function show(){
        /*获取地址数组*/
  var arrs2=[];
   for(var j=0;j<51;j++){
    arrs2.push("images ("+j+").jpg");
   }
   /*随机获取需要的图片张数*/
   function getTupian(arr){
     var newarr=arr;
    var newarrs=[];
    for(var h=0;h<24;h++){
    var num2=parseInt(Math.random()*(51-h))
    newarrs.push(newarr[num2]);
    newarr.splice(num2,1);
    }
    return newarrs;
   }

   var newarrs1=getTupian(arrs2);
/*将随机获取需要的图片张数的数组赋值给newarrs1*/
    for(var i=0;i<24;i++){
      var divs=document.createElement("div");
      /*创建图片盒子div*/
      var divsa=document.createElement("a");
      /*创建链接标签a*/
      divsa.href="#";
      var divimgs=document.createElement("img");
      /*创建包含图片的标签*/
      var divimgs2=document.createElement("img");
      /*创建桃心的标签*/
      divimgs2.src="./images/xin1.png";
      divimgs2.className="xin";
      /*桃心地址 类名*/
      divimgs.style.cssText="width:90px;height:45px";
      /*给包含图片的盒子设置大小*/
      divimgs.src="images/image/"+newarrs1[i];
      /*图片链接*/
      divs.appendChild(divsa)
      /*a标签插入盒子*/
      divsa.appendChild(divimgs)
      /*图片插入a标签*/
      divs.appendChild(divimgs2);
      /*桃心插入盒子*/
      remenNrCenter.appendChild(divs);
      /*盒子插入页面*/

    }
    /*加载到页面*/


    var divimgs2=$(".xin");
    var divs=$("div",remenNrCenter);
for(var i=0;i<divs.length;i++){
   divs[i].index=i;
   hover(divs[i],function(){
    divimgs2[this.index].style.display="block";
   },function(){
    divimgs2[this.index].style.display="none";
   })
 }
 /*实现桃心动效*/
  }
  /*显示页面完成*/
 show()
 for(var q=0;q<remenLis.length;q++){
     remenLis[q].index=q;
    remenLis[q].onclick=function(){
      for(var w=0;w<remenLis.length;w++){
        remenLis[w].style.cssText=""
      }
      remenLis[this.index].style.cssText="text-decoration:underline;font-weight:bold;color:black;"
      remenNrCenter.innerHTML="";
       show()
    }
  }
  /*点击四个按钮*/
  renmenTwoOne.onclick=function(){
          remenNrCenter.innerHTML="";
       show()
  }
/*换一批*/
/*    var remenUl=getClass("remen-ul")[0];
var remenUlLis=remenUl.getElementsByTagName('li');
var remenNrCenter=getClass("remen-nr-center");

for(var i=0;i<remenUlLis.length;i++){
  remenUlLis[i].index=i;
  remenUlLis[i].onclick=function(){
    for(var j=0;j<remenNrCenter.length;j++){
    remenNrCenter[j].style.display="none";
  }
  remenNrCenter[this.index].style.display="block"
  }
}*/



//热门   桃心动态
/* var renmenNrCenter=$(".remen-nr-center");
 var remenNrCenterDiv0=$("div",remenNrCenter[0]);
var remenNrCenterDiv1=$("div",remenNrCenter[1]);
 var remenNrCenterDiv2=$("div",remenNrCenter[2]);
var remenNrCenterDiv3=$("div",remenNrCenter[3]);*/
 /*function xianshixin(remenNrCenterDiv,obj){
   var xin=$(".xin",obj);
    for(var i=0;i<remenNrCenterDiv.length;i++){
   remenNrCenterDiv[i].index=i;
   hover(remenNrCenterDiv[i],function(){
    xin[this.index].style.display="block";
   },function(){
    xin[this.index].style.display="none";
   })
 }
 }
xianshixin(remenNrCenterDiv0,remenNrCenter[0])
xianshixin(remenNrCenterDiv1,remenNrCenter[1])
xianshixin(remenNrCenterDiv2,remenNrCenter[2])
xianshixin(remenNrCenterDiv3,remenNrCenter[3])*/
//搜索框
  var inputs=$(".sousuo-one")[0];
  inputs.onfocus=function(){
    if(inputs.value=="懒人不出门，装修0元保送装"){
    inputs.value="";  
    }

  }
  inputs.onblur=function(){
    if(inputs.value){
    }else{
      inputs.value="懒人不出门，装修0元保送装"
    }
  }
//固定的导航框
var positionsearch=$(".positionsearch")[0];
     var flag=true;
     var flag2=true;
     /*window.onscroll=function(){*/
      function fixedposition(){
         var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      if(obj.scrollTop>=300){
        if(flag){
          animate(positionsearch,{top:0},500,Tween.Linear);
          flag=false;
          flag2=true;             
        } 
      }else{
        if(flag2){
           animate(positionsearch,{top:-50},200,Tween.Linear)
         flag=true;
         flag2=false;
        } 
      }
      }
     
     /*}*/




//下拉列表
    var yiji=$(".yiji");
    var erji=$(".erji");
    for(var i=0;i<yiji.length;i++){
      yiji[i].index=i;
      yiji[i].onmouseover=function(){
      erji[this.index].lis=$("li",erji[this.index]);
      /*animate(erji[this.index],{height:erji[this.index].lis[0].offsetHeight*erji[this.index].lis.length},500,Tween.Linear)*/
      yiji[this.index].style.background="white"
      erji[this.index].style.display="block";
      }
      yiji[i].onmouseout=function(){
      /*animate(erji[this.index],{height:0},500,Tween.Linear)*/
      yiji[this.index].style.background=""
      erji[this.index].style.display="none";
      }
    }

//楼层轮播
    function lpucenglunbo(imgbox,right,left){
          var t1=setInterval(move,2000);
    function move(){
      animate(imgbox,{left:-90},500,Tween.Linear,function(){
        imgbox.style.left=0;
        var first=getFirst(imgbox);
        imgbox.appendChild(first);
      })
      }
      right.onmouseover=left.onmouseover=function(){
        clearInterval(t1);
      }
      right.onmouseout=left.onmouseout=function(){
        t1=setInterval(move,2000);
      }
      left.onclick=function(){
        move();
      }
      right.onclick=function(){
        var first=getFirst(imgbox);
        var last=getLast(imgbox);
        imgbox.style.left=-90+"px";
        imgbox.insertBefore(last,first);
      animate(imgbox,{left:0},500,Tween.Linear,move())
      }
    }

    var imgbox=$(".imgbox")[0];
    var right=$(".f-left-two-three")[0];
    var left=$(".f-left-two-one")[0];
    lpucenglunbo(imgbox,right,left); 
    var imgbox1=$(".imgbox")[1];
    var right1=$(".f-left-two-three")[1];
    var left1=$(".f-left-two-one")[1];
    lpucenglunbo(imgbox1,right1,left1);
    var imgbox2=$(".imgbox")[2];
    var right2=$(".f-left-two-three")[2];
    var left2=$(".f-left-two-one")[2];
    lpucenglunbo(imgbox2,right2,left2);
    var imgbox3=$(".imgbox")[3];
    var right3=$(".f-left-two-three")[3];
    var left3=$(".f-left-two-one")[3];
    lpucenglunbo(imgbox3,right3,left3);
    var imgbox4=$(".imgbox")[4];
    var right4=$(".f-left-two-three")[4];
    var left4=$(".f-left-two-one")[4];
    lpucenglunbo(imgbox4,right4,left4);
    var imgbox5=$(".imgbox")[5];
    var right5=$(".f-left-two-three")[5];
    var left5=$(".f-left-two-one")[5];
    lpucenglunbo(imgbox5,right5,left5);


//左侧固定框
var positionleft=$(".Pleft")[0];
/*获取左侧固定导航条*/
var lis=$("li",positionleft);
/*获取左侧固定导航条每一个li*/
var leftOne=$(".left-one");
var leftTwo=$(".left-two");
/*获取里面的俩字*/
var fBox=$(".f-box");
/*获取每一个楼层*/
var rightNine=$(".right-nine")[0];
/*头侧固定导航的返回顶部*/
window.onscroll=function(){
  var obj=document.documentElement.scrollTop?document.documentElement:document.body;
  fixedposition();
  /*top固定导航栏*/
  if(obj.scrollTop>=1000&&obj.scrollTop<=fBox[11].offsetTop){
    positionleft.style.display="block";
  }else{
    positionleft.style.display="none";
  }
  /*左侧导航条显示条件*/
  /*使用按需加载图片给热门内容加载图片*/
//获取每一个楼层的offsettop
for(var i=0;i<fBox.length;i++){
  fBox[i].index=fBox[i].offsetTop;
  if(fBox[i].index<=obj.scrollTop+document.documentElement.clientHeight){
       var imgss=$("img",fBox[i]);
       for(var a=0;a<imgss.length;a++){
        imgss[a].src=imgss[a].getAttribute("srcs");
       }
  }
  /*/*使用按需加载图片给每一楼层加载图片*/
  if(obj.scrollTop>=fBox[i].index-100&&i<11){
            for(var j=0;j<lis.length;j++){
              leftOne[j].style.display="block";
              leftTwo[j].style.display="none";
            }
            leftOne[i].style.display="none";
            leftTwo[i].style.display="block";

}
/*左侧导航条发生变化*/

for(var t=0;t<lis.length;t++){
          lis[t].stop=fBox[t].offsetTop;
            lis[t].onclick=function(){
            animate(obj,{scrollTop:this.stop-100},300,Tween.Linear);
           }
}
/*点击导航条跳转到楼层*/
}
rightNine.onclick=function(){
  animate(obj,{scrollTop:0},500,Tween.Linear)
}
}
/*窗口改变  隐藏左侧导航*/
window.onresize=function(){
  var dmtWidth=document.documentElement.clientWidth;
  if(dmtWidth<=1190){
    positionleft.style.width=0;
    positionleft.style.overflow='hidden';
  }else if(dmtWidth>1225){
    positionleft.style.width='35px';
    positionleft.style.overflow='';
    positionleft.style.positionLeft=((dmtWidth-1190)/2-35)+'px';
  }
}

//轮播
var lunbo=$(".lunbo")[0];
var img=$("img",lunbo);
var dadaohangBox=$(".dadaohang-box")[0];
var righttupian=$(".righttupian")[0];
img[0].style.zIndex=3;
  var list=$(".yuan");
  /*获取轮播下标*/
  list[0].style.background="#C40000";
  list[0].style.color="white";
  for(var i=0;i<list.length;i++){
    list[i].index=i;
/*    hover(list[i],function(){
      clearInterval(t);
      for(var j=0;j<list.length;j++){
      list[j].style.background="white";
      list[j].style.color="black";
      img[j].style.zIndex=2;
    }
    img[this.index].style.zIndex=3;
    list[this.index].style.cursor="pointer";
    list[this.index].style.background="#C40000";
    list[this.index].style.color="white";
    dadaohangBox.style.background=arr[this.index];
    },function(){
      t=setInterval(move,2000);
      num=this.index+1;
    })*/
    list[i].onmouseover=function(){
      clearInterval(t);
      for(var j=0;j<list.length;j++){
      list[j].style.background="white";
      list[j].style.color="black";
      img[j].style.zIndex=2;
    }
    img[this.index].style.zIndex=3;
    list[this.index].style.cursor="pointer";
    list[this.index].style.background="#C40000";
    list[this.index].style.color="white";
    dadaohangBox.style.background=arr[this.index];
    }
    list[i].onmouseout=function(){
      t=setInterval(move,2000);
      num=this.index+1;
    }
  }

    var arr=["#265fc6","#e0e0e0","#e0e0e0","#5b3fad","#0166ff","#c89fff"]
    var arrs2=["l00","l0","l1","l000","l0000","l1"]
    var num=1;
    var t=setInterval(move,2000);
    function move(){
      if(num==6){
        num=0;
      }
      for(var i=0;i<img.length;i++){
      img[i].style.zIndex=2;
      list[i].style.background="white";
      list[i].style.color="black";
      /*轮播前清空样式*/
      }
      img[num].style.zIndex=3;
      dadaohangBox.style.background=arr[num];
      /*随着轮播换背景颜色*/
      righttupian.innerHTML="<img  src='./images/bgimg/"+arrs2[num]+".jpg''>"
      /*改变右边的图片*/
      list[num].style.background="#C40000";
    list[num].style.color="white";
    num++;
    }


//导航"#ededed",
var daohangleftBackgroundbox=$(".daohangleft-backgroundbox")[0];
var arrs=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var arrs1=["#ffaecf","#ebebeb","#dbdbdb","#ffbcd1","#db060a","#ffa800","#fed0db","#fa7200","#5f43b1","#cca5ff","#fc4563","#ffe749","#2174ec","#dadada","#f32f53"]
var arrs3=["l2","l3","l4","l5","l6","l7","l8","l9","l10","l11","l12","l13","l14","l15","l16","l17","l18"]
var leftdaohang=$(".leftdaohang")[0];
var liss=$("li",leftdaohang);
var imgs=$("img",leftdaohang);
var jingxuanshichang=$(".jingxuanshichang")[0];
var jxsc=$(".jxsc");
for(var i=1;i<liss.length;i++){
  liss[i].index=i;
  hover(liss[i],function mouseOver(){
    clearInterval(t);
    jingxuanshichang.style.display="none";
    imgs[0].style.display="none";
    /*隐藏默认*/
    imgs[this.index].style.display="block";
    jxsc[this.index-1].style.top=-(this.index*liss[0].offsetHeight)+"px";
    jxsc[this.index-1].style.display="block";
    /*显示相应图层*/
    daohangleftBackgroundbox.style.zIndex=5;
    daohangleftBackgroundbox.innerHTML="<img src='./images/bgimg/"+arrs[this.index-1]+".jpg'>"
    dadaohangBox.style.background=arrs1[this.index-1];
    /*轮播上显示与图层相对应的图片*/
    righttupian.innerHTML="<img  src='./images/bgimg/"+arrs3[this.index-1]+".png' class='righttupianimg'><img  src='./images/bgimg/"+arrs3[this.index]+".png'  class='righttupianimg'>";

  },function mouseOut(){
    jingxuanshichang.style.display="block";
    imgs[0].style.display="block";
    /*显示默认*/
    imgs[this.index].style.display="none";
    jxsc[this.index-1].style.display="none";
    /*隐藏导航图片*/
    daohangleftBackgroundbox.innerHTML="" ;
    daohangleftBackgroundbox.style.zIndex=3;
    /*隐藏导航背景*/
    dadaohangBox.style.background=arr[num-1];
    t=setInterval(move,2000);
    /*启动轮播*/
   
  })
}
/*右侧固定蓝*/
var rightPosition=$(".right")[0];
var lisrs=$("li",rightPosition);
var rightPositionDiv=$("div",rightPosition);
for(var b=0;b<lisrs.length;b++){
  lisrs[b].index=b;
  hover(lisrs[b],function(){
    rightPositionDiv[this.index].style.width=0;
    animate(rightPositionDiv[this.index],{width:80},300,Tween.Linear);
    rightPositionDiv[this.index].style.cursor="pointer";
  },function(){
    animate(rightPositionDiv[this.index],{width:0},300,Tween.Linear)
  })
}




})


