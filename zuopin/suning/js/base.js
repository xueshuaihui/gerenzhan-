$(function(){
	/*下拉列表*/
	var yiji=$(".yiji");
	var erji=$(".erji");
	for(var i=0;i<yiji.length;i++){
		yiji[i].index=i;
		hover(yiji[i],function(){
			erji[this.index].style.height=0;
			erji[this.index].style.display="block";
			var erjiHeight;
			if(this.index==0){
				erji[this.index].style.cssText="padding:20px 0;";
				erjiHeight=202;
				erji[this.index].style.display="block";

			}else{
				var erjilis=$("li",erji[this.index]);
				erjiHeight=erjilis[this.index].offsetHeight*erjilis.length;
			}
			animate(erji[this.index],{height:erjiHeight},200,Tween.Linear);
		},function(){
			if(this.index==0){
				erji[this.index].style.padding=0;
			}
			animate(erji[this.index],{height:0},200,Tween.Linear);
		})
	}
/*搜索部分*/
var sousuoBox=$(".sousuo-box")[0];
var sousuoBoxText=$("input",sousuoBox)[0];
var sousuoCenterThreeResoubox=$(".sousuo-center-three-resoubox")[0];
var sousuoCenterThreeResoubox=$(".sousuo-center-three-resoubox")[0];
/*获取搜索历史*/
sousuoBoxText.onfocus=function(){
	sousuoCenterThreeResoubox.style.display="block";
	if(sousuoBoxText.value=="桃'礼'满天下,9月谢师恩,满99减50"){
			sousuoBoxText.value="";
	        sousuoBoxText.style.color="black";
	}

};
sousuoBoxText.onblur=function(){
	sousuoCenterThreeResoubox.style.display="none";
	var sousuoBoxTextValue=sousuoBoxText.value;
	if(sousuoBoxText.value==""){
		sousuoBoxText.style.color="";
	    sousuoBoxText.value="桃'礼'满天下,9月谢师恩,满99减50"
	}else{
		sousuoBoxText.value=sousuoBoxTextValue;
	}
}
/*控制搜索光标*/
var sousuodianji=$(".sousuodianji")[0];
var sousuoCenterThreeHistory=$(".sousuo-center-three-history")[0];
document.onkeydown=sousuodianji.onclick=function(e){
	var ev=e||window.event;
	/*鼠标键盘同时操作*/
	if(ev.type=="click"||(ev.type=="keydown"&&ev.keyCode==13)){
	 var zuijinlis=document.createElement("li");
	 /*为空的时候不添加*/
     if(sousuoBoxText.value){
     zuijinlis.innerHTML=sousuoBoxText.value;
	 sousuoCenterThreeHistory.appendChild(zuijinlis);
	 /*超过7个删除第一个*/
	 var sousuoCenterThreeHistorylis=$("li",sousuoCenterThreeHistory);
	 if(sousuoCenterThreeHistorylis.length>=8){
	 	sousuoCenterThreeHistory.removeChild(sousuoCenterThreeHistorylis[2]);
	 }
	}
     }
}
/*搜索历史*/	
/*导航*/
var leftDaohang=$(".left-daohang")[0];
var leftDaohanglis=$("li",leftDaohang);
var leftDaohanglislen=leftDaohanglis.length;
/*二级菜单定位*/
var ldhlisH=leftDaohanglis[0].offsetHeight;
var ldhbox=$(".ldhbox");
for(var a=0;a<ldhbox.length;a++){
	ldhbox[a].style.cssText="width:802px;height:450px;background:white;border-top:1px solid #000;border-right:1px solid #000;border-bottom:1px solid #000;position:absolute;top:"+(-2-ldhlisH*a)+"px;right:-802px;;z-index:10;display:none";
}
/*二级菜单样式*/
for(var j=0;j<leftDaohanglislen;j++){
	leftDaohanglis[j].index=j;
	hover(leftDaohanglis[j],function(){
		leftDaohanglis[this.index].style.background="white"
		var as=$("a",leftDaohanglis[this.index]);
		ldhbox[this.index].style.display="block";
		/*划入字的事件*/
		for(var i=0;i<as.length;i++){
			as[i].style.color="black";
			as[i].index=i;
			hover(as[i],function(){
				as[this.index].style.textDecoration="underline";
			},function(){
				as[this.index].style.textDecoration="none";
			})
			/*划入字的事件*/
		}
		/*for循环为每一个a标签添加*/
	},function(){
        leftDaohanglis[this.index].style.background="";
        var as=$("a",leftDaohanglis[this.index]);
        ldhbox[this.index].style.display="none";
        for(var i=0;i<as.length;i++){
			as[i].style.color="";
		}
		
	})
}











/*轮播*/
var imgbox=$(".imgbox")[0];
var imgs=$("img",imgbox);
var imgslen=imgs.length;
var zhanshi=$(".zhanshi")[0];
var lunboBottom=$(".lunbo-bottom")[0];
var lunbolis=$("li",lunboBottom);
var zhanshiarr=["#e6f3fb","#12171a","#db2839","#e83f39","#e42a46","#f4b7d2","#f5b227","#dc1e37","#e0d699","#e72444","#302a53","#e6f4fc","#f7df8a","#3b76bb","#5f122e","#e61c14","#e71f39"];
/*底部显示*/ 
var lbbtPosition=$(".lbbt-position");
imgs[0].style.zIndex=3;
zhanshi.style.background=zhanshiarr[0];
lbbtPosition[0].parentNode.parentNode.style.display="block";
lbbtPosition[0].parentNode.parentNode.parentNode.style.cssText="background:rgba(0,0,0,0.7);width:67px;height:40px;text-align:center;float:left;color:white;margin-right:1px;";
lbbtPosition[0].style.background="#FA0";
/*初始样式*/
var lunbo=setInterval(Lunbo,3000);
var lbnum=0;
function Lunbo(){
	imgs[lbnum].style.zIndex=1;
	zhanshi.style.background="";
	lbbtPosition[lbnum].parentNode.parentNode.style.display="none";
	// animate(lbbtPosition[lbnum].parentNode.parentNode,{height:0},500)
	lbbtPosition[lbnum].parentNode.parentNode.parentNode.style.cssText="";
	lbbtPosition[lbnum].style.background="white";
	lbnum++;
	if(lbnum==imgslen){
		lbnum=0;
	}
	imgs[lbnum].style.zIndex=3;
	zhanshi.style.background=zhanshiarr[lbnum];
	lbbtPosition[lbnum].parentNode.parentNode.style.display="block";
	// animate(lbbtPosition[lbnum].parentNode.parentNode,{height:10},500);
	lbbtPosition[lbnum].parentNode.parentNode.parentNode.style.cssText="background:rgba(0,0,0,0.7);width:67px;height:40px;text-align:center;float:left;color:white;margin-right:1px;";
	lbbtPosition[lbnum].style.background="#FA0";
}
/*划上 划下*/
var lbbtbigbox=$(".lbbtbigbox");
var lbbtPositionDiv=$(".lbbt-position-1");
var lbbtPositionps=$("p",lunboBottom);
  for(var j=0;j<lbbtPositionps.length;j++){
  	/*划上底部标签*/
  	lbbtPositionps[j].parentNode.parentNode.index=j;
  	hover(lbbtPositionps[j].parentNode.parentNode,function(){
  		clearInterval(lunbo);
  		imgs[lbnum].style.zIndex=1;
	    zhanshi.style.background="";
	    lbbtPosition[lbnum].parentNode.parentNode.style.display="none";
	    lbbtPosition[lbnum].parentNode.parentNode.parentNode.style.cssText="";
	    lbbtPosition[lbnum].style.background="white";
	    /*清除轮播样式*/

	  	imgs[this.index].style.zIndex=3;
		lbbtPositionps[this.index].parentNode.style.display="block";
		zhanshi.style.background=zhanshiarr[this.index];
		lbbtPositionDiv[this.index].style.background="#FA0";

  	},function(){
	  	imgs[this.index].style.zIndex=1;
		lbbtPositionps[this.index].parentNode.style.display="none";
		lbbtPositionDiv[this.index].style.background="white";
		/*鼠标离开之后清除划上的样式*/
		/*设置当前为默认样式*/
		 imgs[this.index].style.zIndex=3;
         zhanshi.style.background=zhanshiarr[this.index];
         lbbtPosition[this.index].parentNode.parentNode.style.display="block";
         lbbtPosition[this.index].parentNode.parentNode.parentNode.style.cssText="background:rgba(0,0,0,0.7);width:67px;height:40px;text-align:center;float:left;color:white;margin-right:1px;";
         lbbtPosition[this.index].style.background="#FA0";
        /*轮播继续*/
		lbnum=this.index;
		lunbo=setInterval(Lunbo,3000);
  	})
/*划上标签内的隐藏  样式*/
lbbtPositionps[j].parentNode.index=j;
hover(lbbtPositionps[j].parentNode,function(){},function(){
	  	imgs[this.index].style.zIndex=3;
	  	zhanshi.style.background=zhanshiarr[this.index];
})

/*划上标签内的内容 样式*/
  	lbbtPositionps[j].index=j;
  	hover(lbbtPositionps[j],function(){
  		clearInterval(lunbo)
  		imgs[this.index].style.zIndex=3;
        zhanshi.style.background=zhanshiarr[this.index];
  		lbbtPositionDiv[this.index-1].style.background="white";
  		lbbtPositionDiv[this.index].style.background="#FA0";

  	},function(){
  		imgs[this.index].style.zIndex=1;
  		lbbtPositionDiv[this.index].style.background="white";
  	})
  }
/*按钮*/
var btnLeft=$(".btn-left")[0];
var btnRight=$(".btn-right")[0];
var banner=$(".lunbo")[0];
var lbbox=$(".lunbo")[0];
var lbbtnNum=0
hover(lbbox,function(){
 	clearInterval(lunbo);
 	btnRight.style.display="block";
 	btnLeft.style.display="block";
 	btnRight.onclick=function(){
 	Lunbo();
 }
     btnLeft.onclick=function(){
 	    imgs[lbnum].style.zIndex=1;
	zhanshi.style.background="";
	lbbtPosition[lbnum].parentNode.parentNode.style.display="none";
	// animate(lbbtPosition[lbnum].parentNode.parentNode,{height:0},500)
	lbbtPosition[lbnum].parentNode.parentNode.parentNode.style.cssText="";
	lbbtPosition[lbnum].style.background="white";
	lbnum--;
	if(lbnum<0){
		lbnum=imgslen-1;
	}
	imgs[lbnum].style.zIndex=3;
	zhanshi.style.background=zhanshiarr[lbnum];
	lbbtPosition[lbnum].parentNode.parentNode.style.display="block";
	// animate(lbbtPosition[lbnum].parentNode.parentNode,{height:10},500);
	lbbtPosition[lbnum].parentNode.parentNode.parentNode.style.cssText="background:rgba(0,0,0,0.7);width:67px;height:40px;text-align:center;float:left;color:white;margin-right:1px;";
	lbbtPosition[lbnum].style.background="#FA0";
       }
 },function(){
 	btnRight.style.display="none";
 	btnLeft.style.display="none";
 	clearInterval(lunbo);
    lunbo=setInterval(Lunbo,3000);
 });


/*楼层部分   热门活动   猜你喜欢*/
/*创建数组 放每个楼层的价钱文字*/
var arrfloor01=["宾格BINGER手表 全自动机械表 时"];
var arrfloor011=[199]
var arrfloor02=["宾格BINGER手表 全自动机械表 时"];
var arrfloor03=["宾格BINGER手表 全自动机械表 时"];
var arrfloor04=["宾格BINGER手表 全自动机械表 时"];
var arrfloor05=["宾格BINGER手表 全自动机械表 时"];
var arrfloor06=["宾格BINGER手表 全自动机械表 时"];
var arrfloor07=["宾格BINGER手表 全自动机械表 时"];
var arrfloor08=["宾格BINGER手表 全自动机械表 时"];
var arrfloor09=["宾格BINGER手表 全自动机械表 时"];
var arrfloor10=["宾格BINGER手表 全自动机械表 时"];
function floortop(num){
	var arr=["#f84466","#87aff9","#92e82d","#fd913a","#f84466","#f84466","#87aff9","#1c05fd","#05fd16","#fab206"]
	var firstTitle=$(".title-two-one")[num];
    var twoTitle=$(".title-two-two")[num];
	firstTitle.style.cssText="font-weight:bold;border-top:2px solid "+arr[num]+";border-left:2px solid "+arr[num]+";border-right:2px solid "+arr[num]+";border-bottom:2px solid white;background:white"
	var sunning1fBodyPosition=$(".sunning-1f-body-position")[num];
	firstTitle.onclick=function(){
	   firstTitle.style.cssText="font-weight:bold;border-top:2px solid "+arr[num]+";border-left:2px solid "+arr[num]+";border-right:2px solid "+arr[num]+";border-bottom:2px solid white;background:white";
	   sunning1fBodyPosition.style.display="none";
	   twoTitle.style.cssText=""
	}
	twoTitle.onclick=function(){
		firstTitle.style.cssText=""
		twoTitle.style.cssText="font-weight:bold;border-top:2px solid "+arr[num]+";border-left:2px solid "+arr[num]+";border-right:2px solid "+arr[num]+";border-bottom:2px solid white;background:white";
		sunning1fBodyPosition.style.display="block";
		/*显示喜欢部分*/
		if(sunning1fBodyPosition.childNodes.length>1){
			return
		}
		/*点击之后开始加载内容*/
		for(var i=0;i<=10;i++){
			var divs=document.createElement("div");
			divs.style.cssText="width:198px;height:198px;float:left;border-right:1px solid #eee;margin:10px 0"
			if(i==4||i==10){
				divs.style.cssText="width:198px;height:198px;float:left;border:0;margin:10px 0"
			}
			if(i==5){
				divs.style.cssText="float:left;width:998px;height:1px;background:#eee;";
			}
			/*创建div*/
			var imgs=document.createElement("img");
			imgs.style.cssText="display:block;margin:22px auto 10px;"
			var floorps=document.createElement("p");
			floorps.style.cssText="text-align:center;"
			var floora=document.createElement("a");
			floora.style.cssText="display:block;width:100%;text-align:center;"
			if(i<5){
			 imgs.src="./image/floor/l ("+(num+1)+")/l"+(num+1)+" ("+(i+1)+").jpg";
			 imgs.srcs="./image/floor/l ("+(num+1)+")/l"+(num+1)+" ("+(i+1)+").jpg";
			 floora.innerHTML=arrfloor01[0];
			 floorps.innerHTML="<font style='font-size:15px;'>¥</font><font style='font-size:23px;font-weight:bold;'>"+arrfloor011[0]+"</font><font style='font-size:15px;font-weight:bold;'>.00</font>";
			}
			if(i==5){
				imgs.style.display='none'
			}
			if(i>5){
			 imgs.src="./image/floor/l ("+(num+1)+")/l"+(num+1)+" ("+i+").jpg";
			 imgs.srcs="./image/floor/l ("+(num+1)+")/l"+(num+1)+" ("+i+").jpg";
			 floora.innerHTML=arrfloor01[0];
			 floorps.innerHTML="<font style='font-size:15px;'>¥</font><font style='font-size:20px;font-weight:bold;font-family:'Microsoft Yahei';>"+arrfloor011[0]+"</font><font style='font-size:15px;font-weight:bold;'>.00</font>";
			}
			/*创建img*/
			/*创建p标签  添加文字*/
			sunning1fBodyPosition.appendChild(divs);
			divs.appendChild(imgs);
			divs.appendChild(floora);
			divs.appendChild(floorps);


		}

	}
}

/*1l*/
floortop(0);
floortop(1);
floortop(2);
floortop(3);
floortop(4);
floortop(5);
floortop(6);
floortop(7);
floortop(8);
floortop(9);

/*右侧固定导航*/
var prirhtul=$(".prirhtul")[0];
var prirhtullis=$("li",prirhtul);
var prightyiji=$(".prightyiji");
var prighterji=$(".prighterji");
for(var i=0;i<prirhtullis.length;i++){
	prirhtullis[i].index=i;
	hover(prirhtullis[i],function(){
		if(this.index==7){
			animate(prighterji[this.index],{width:131,height:154},500);
		}else{
			prighterji[this.index].style.background="#FFAA01";
		    prighterji[this.index].style.color="#383838";
			animate(prighterji[this.index],{width:70},500);
		}
		
	},function(){
		prighterji[this.index].style.background="#383838";
		prighterji[this.index].style.color="#FFAA01";
		animate(prighterji[this.index],{width:0},500);
	})
}




//左侧固定框
var positionleft=$(".Pleft")[0];
/*获取左侧固定导航条*/
var lis=$("li",positionleft);
/*获取左侧固定导航条每一个li*/
var leftOne=$(".left-one");
var leftTwo=$(".left-two");
/*获取里面的俩字*/
var fBox=$(".suning-1f");
/*获取每一个楼层*/
window.onscroll=function(){
  var obj=document.documentElement.scrollTop?document.documentElement:document.body;
  if(obj.scrollTop>=1000&&obj.scrollTop<=fBox[9].offsetTop){
    positionleft.style.display="block";
  }else{
    positionleft.style.display="none";
  }
  /*左侧导航条显示条件*/
//获取每一个楼层的offsettop
for(var i=0;i<fBox.length;i++){
  fBox[i].index=fBox[i].offsetTop;
  if(fBox[i].index<=obj.scrollTop+document.documentElement.clientHeight){
       var imgss=$("img",fBox[i]);
       for(var a=0;a<imgss.length;a++){
       	if(imgss[a].getAttribute("srcs")){
       		imgss[a].src=imgss[a].getAttribute("srcs");
       	}else{
       		imgss[a].src=imgss[a].srcs;
       	}
        
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
prightyiji[8].onclick=function(){
  animate(obj,{scrollTop:0},500,Tween.Linear)
}

/*窗口改变  隐藏左侧导航*/
window.onresize=function(){
  var dmtWidth=document.documentElement.clientWidth;
  if(dmtWidth<=1260){
    positionleft.style.width=0;
    positionleft.style.overflow='hidden';
  }else if(dmtWidth>1260){
    positionleft.style.width='35px';
    positionleft.style.overflow='';
    positionleft.style.positionLeft=((dmtWidth-1190)/2-35)+'px';
  }
}


}


/*苏宁社区*/
var shequRight=$(".shequ-right")[0];
// var shequRightBox=$(".shequRightBox")[0];
var shrqubtn=$(".shrqubtn");
var shequleft=$(".shequleft")[0];
var shequright=$(".shequright")[0];
/*显示按钮*/
hover(shequRight,function(){
	shequleft.style.display='block';
	shequright.style.display='block';
},function(){
	shequleft.style.display='none';
	shequright.style.display='none';
})
var shequRightOne=$(".shequRightOne");
shequRightOne[0].style.left=0;
var shequRightOneWidth=shequRightOne[0].offsetWidth;
shrqubtn[0].style.background='#FA0';
var shequnum=0;
shequright.onclick=function(){
	shrqubtn[shequnum].style.background='';
	var shequindex=shequnum;
	animate(shequRightOne[shequnum],{left:-shequRightOneWidth},200,function(){
		shequRightOne[shequindex].style.left=shequRightOneWidth+'px';
	});
	shequnum++;
	if(shequnum>=3){
		shequnum=0;
	}
	shrqubtn[shequnum].style.background='#FA0';
	animate(shequRightOne[shequnum],{left:0},200,function(){
	});
}
shequleft.onclick=function(){
	shrqubtn[shequnum].style.background='';
	var shequindex=shequnum;
	animate(shequRightOne[shequnum],{left:shequRightOneWidth},200,function(){
		shequRightOne[shequindex].style.left=-shequRightOneWidth+'px';
	});
	shequnum--;
	if(shequnum<0){
		shequnum=2;
	}
	shrqubtn[shequnum].style.background='#FA0';
	animate(shequRightOne[shequnum],{left:0},200,function(){
	});
}















})