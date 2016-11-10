$(function(){
/*购物车的下拉*/
   var shopcar=$(".shopcar")[0];
   var shopcarbox=$(".shopcarbox")[0];
   hover(shopcar,function(){
   	shopcarbox.style.height=0;
    shopcar.style.background='white';
    shopcar.style.color='#ff6700';
   	animate(shopcarbox,{height:100},200)
   },function(){
   	animate(shopcarbox,{height:0},200,function(){
          shopcar.style.background='';
          shopcar.style.color='';
    })
   })
/*下拉列表*/
var mainyiji=$(".maineryiji");
var mainerji=$(".mainerji");
var yijilen=mainyiji.length;
var erjilen=mainerji.length;
var mainnav=$(".mainnav")[0];
var mainNav=$(".main-nav");
// alert(mainNav[7].innerHTML)
/**/
hover(mainnav,function(){},moveup);
hover(mainNav[6],function(){},moveup);
hover(mainNav[5],function(){},moveup);
function moveup(){
  for(var j=0;j<erjilen;j++){
      animate(mainerji[j],{height:0},300,function(){
        for(var i=0;i<erjilen;i++){
          mainerji[i].style.display='none'
        }
      });
    }
}
/*划离大边框的时候向上划*/
for(var i=0;i<yijilen;i++){
  mainyiji[i].index=i;
  hover(mainyiji[i],function(){
    for(var j=0;j<erjilen;j++){
      mainerji[j].style.display='block';
      animate(mainerji[j],{height:206},300);
      mainerji[j].style.zIndex=15;
    }
    mainerji[this.index].style.zIndex=16;
  })
}
/*划上一个就将所有的都划下来，然后将当前层级调高*/
/*搜索框*/
var searchT=$(".search-t")[0];
/*搜索图标的外框*/
var search=$(".search")[0];
/*搜索条的外框*/
var inputText=$(".input-text")[0];
/*搜索条*/
var searchtextbox=$(".searchtextbox")[0];
/*显示条*/
var wenzi=$(".wenzi");
/*字*/
var searchps=$("p",searchtextbox);
var searchpslen=searchps.length;
for(var j=0;j<searchpslen;j++){
  if(j%2==0){
    searchps[j].style.float='left';
    searchps[j].style.color='black';
  }
  if(j%2==1){
    searchps[j].style.float='right';
  }
}
/**/
inputText.onfocus=function(){
  searchtextbox.style.display='block';
  searchT.style.borderColor='#ff6700';
  search.style.borderColor='#ff6700';
  wenzi[0].style.display='none';
  wenzi[1].style.display='none';
}
inputText.onblur=function(){
    searchtextbox.style.display='none';
  searchT.style.borderColor='';
  search.style.borderColor='';
  wenzi[0].style.display='block';
  wenzi[1].style.display='block';
}








	/*轮播*/
		var img=$(".images");
	var list=$(".circle");
  var gtnleft=$(".gtnleft")[0];
  var gtnright=$(".gtnright")[0];
  img[0].style.zIndex=3;
	var num=1;
    var t=setInterval(move,3000);
    function move(){
    	if(num>=img.length){
    		num=0
    	}
    	for(var i=0;i<img.length;i++){
    		img[i].style.zIndex=2;
    		list[i].style.background="#757575";
    	}
    	img[num].style.zIndex=3;
    	list[num].style.background="white";
		num++;
    }
    /*点击事件*/
    gtnright.onclick=function(){
      clearInterval(t);
      move();
      t=setInterval(move,3000);
    }
    gtnleft.onclick=function(){
      clearInterval(t);
      num--;
      if(num<0){
        num=4
      }
      for(var i=0;i<img.length;i++){
        img[i].style.zIndex=2;
        list[i].style.background="#757575";
      }
      img[num].style.zIndex=3;
      list[num].style.background="white";
    t=setInterval(move,3000);
    }
    /*lunbo*/
    for(var i=0;i<list.length;i++){
		list[i].index=i;
    hover(list[i],function(){
      clearInterval(t);
      for(var j=0;j<list.length;j++){
      list[j].style.background="#757575";
      img[j].style.zIndex=2;
    }
    img[this.index].style.zIndex=3;
    list[this.index].style.background="white";
    },function(){
      num=this.index+1;
      t=setInterval(move,3000);
    })
	}
/*左侧导航*/
var note=$(".note");
var notebox=$(".notebox");
var notelen=note.length;
var noteboxlen=notebox.length;
for(var i=0;i<notelen;i++){
  notebox[i].style.top=(-20+(-i*note[0].offsetHeight))+'px';
  notebox[i].style.left=(note[0].offsetWidth)+'px';
}
for(var j=0;j<notelen;j++){
  note[j].index=j;
  hover(note[j],function(){
    notebox[this.index].style.display='block';
     var noteboxuls=$('ul',notebox[this.index]);
     notebox[this.index].style.width=(noteboxuls.length*noteboxuls[0].offsetWidth)+'px';
  },function(){
    notebox[this.index].style.display='none'
  })   
}
/*明星单品*/
var sparbigbox=$(".sparbigbox")[0];
var maleft=sparbigbox.offsetWidth/2;
var left=$(".left")[0];
var right=$(".right")[0];
right.onclick=function(){
  animate(sparbigbox,{marginLeft:-maleft},500);
  right.style.color='#e0e0e0';
  left.style.color='#b0b0b0';
  hover(left,function(){
    left.style.color='#FF6700'
  },function(){
    left.style.color='#b0b0b0'
  })

}
left.onclick=function(){
  animate(sparbigbox,{marginLeft:0},500);
  left.style.color='#e0e0e0';
  right.style.color='#b0b0b0';
  hover(right,function(){
    right.style.color='#FF6700'
  },function(){
    right.style.color='#b0b0b0'
  })
}
/*内容部分选项卡*/
var rightNavOne=$(".right-nav-one");
var rightbigbox=$(".rightbigbox");
for(var i=0;i<rightNavOne.length;i++){
  rightNavOne[i].index=i;
  hover(rightNavOne[i],function(){
    for(var j=0;j<rightbigbox.length;j++){
      rightbigbox[j].style.zIndex=1;
      rightNavOne[j].style.textDecoration='none';
      rightNavOne[j].style.color='';
    }
    rightbigbox[this.index].style.zIndex=3;
    rightNavOne[this.index].style.textDecoration='underline';
    rightNavOne[this.index].style.color='#FF6700';
  },function(){})
}
/*为你推荐*/
var sparboxTwobigbox=$(".sparbox-twobigbox")[0];
var spartwoleft=sparboxTwobigbox.offsetWidth/2;
var left1=$(".left")[1];
var right1=$(".right")[1];
right1.onclick=function(){
  animate(sparboxTwobigbox,{marginLeft:-maleft},500);
  right1.style.color='#e0e0e0';
  left1.style.color='#b0b0b0';
  hover(left1,function(){
    left1.style.color='#FF6700'
  },function(){
    left1.style.color='#b0b0b0'
  })

}
left1.onclick=function(){
  animate(sparboxTwobigbox,{marginLeft:0},500);
  left1.style.color='#e0e0e0';
  right1.style.color='#b0b0b0';
  hover(right1,function(){
    right1.style.color='#FF6700'
  },function(){
    right1.style.color='#b0b0b0'
  })
}
/*内容轮播*/
var nrbigbox=$(".nrbigbox");
var nrbox=$('.nrbox');
var nenrongright=$('.nenrongright');
var nenrongleft=$(".nenrongleft");
var nengrongyuanBox=$(".nengrongyuan-box");
var nrWidth=$(".nenrong")[0].offsetWidth;
function nenronglunbo(num){
  hover(nrbigbox[num],function(){
    nenrongright[num].style.display='block';
    nenrongleft[num].style.display='block';
  },function(){
     nenrongright[num].style.display='none';
    nenrongleft[num].style.display='none';
  })
  /*显示左右按钮*/

  var index=0;
  /*当前下标*/
  var nrxiabiao=$(".nenrong-yuan",nengrongyuanBox[num]);
  var nrxiabiaolens=nrxiabiao.length;
  /*获取下标圆*/
  /*右击*/
  nenrongright[num].onclick=function(){
    index++;
    if(index>=3){
      index=3;
    }
    for(var i=0;i<nrxiabiaolens;i++){
      nrxiabiao[i].style.background='red';
    }
    nrxiabiao[index].style.background='white';
    animate(nrbox[num],{marginLeft:-nrWidth*index},300);
  }
  /*左击*/
  nenrongleft[num].onclick=function(){
    index--;
    if(index<=0){
      index=0;
    }
    for(var i=0;i<nrxiabiaolens;i++){
      nrxiabiao[i].style.background='red';
    }
    nrxiabiao[index].style.background='white';
    animate(nrbox[num],{marginLeft:-nrWidth*index},300)
  }
/*左右点击*/
for(var j=0;j<nrxiabiaolens;j++){
    nrxiabiao[j].index=j;
  nrxiabiao[j].onclick=function(){
    for(var i=0;i<nrxiabiaolens;i++){
      nrxiabiao[i].style.background='red';
    }
    nrxiabiao[this.index].style.background='white';
    animate(nrbox[num],{marginLeft:-nrWidth*this.index},300)
    index=this.index;
  }
}
/*点击圆*/

}
nenronglunbo(0);
nenronglunbo(1);
nenronglunbo(2);
nenronglunbo(3);

















})