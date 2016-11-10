function draw(copy,canvas,cobj){
    this.copy=copy;
    this.canvas=canvas;
    this.cobj=cobj;
    this.w=this.canvas.offsetWidth;
    this.h=this.canvas.offsetHeight;
    this.shapes="line";
    this.type="stroke"
    this.fillcolor="#000";
    this.strokecolor="#000";
    this.lineWidth=1;
    this.arr=[];
    this.pen.flag=true;
    this.temp;
    /*同于选取时存放临时数据*/
}
draw.prototype={
    init:function(){
        //this.xpobj.css("display","none");
        //this.selectobj.css("display","none");
        /*if (this.temp) {
            this.arr.push(this.cobj.getImageData(0, 0, this.w, this.h));
            this.temp = null;
        }*/
        this.cobj.fillStyle=this.fillcolor;
        this.cobj.strokeStyle=this.strokecolor;
        this.cobj.lineWidth=this.lineWidth;
    },
    draw:function(){
        var that=this;
        that.copy.onmousedown=function(e){
            var startx= e.offsetX;
            var starty= e.offsetY;
            that.copy.onmousemove=function(e){
                that.init();
                var endx= e.offsetX;
                var endy= e.offsetY;
                that.cobj.clearRect(0,0,that.w,that.h)
                if(that.arr.length>0){
                    that.cobj.putImageData(that.arr[that.arr.length-1],0,0);
                }
                that[that.shapes](startx,starty,endx,endy)
            }
            that.copy.onmouseup=function(){
                that.arr.push(that.cobj.getImageData(0,0,that.w,that.h))
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
            }
        }
    },
    line:function(startx,starty,endx,endy){
        this.cobj.beginPath();
        this.cobj.moveTo(startx,starty);
        this.cobj.lineTo(endx,endy);
        this.cobj.stroke();
        this.cobj.closePath();
    },
    rect:function(startx,starty,endx,endy){
        this.cobj.beginPath();
        this.cobj.rect(startx,starty,endx-startx,endy-starty);
        this.cobj[this.type]();
        this.cobj.closePath();
    },
    circle:function(startx,starty,endx,endy){
        this.cobj.beginPath();
        var r=Math.sqrt((endx-startx)*(endx-startx)+(endy-starty)*(endy-starty))
        this.cobj.arc(startx,starty,r,0,Math.PI*2);
        this.cobj[this.type]();
        this.cobj.closePath();
    },
    pen:function(){
        var that=this;
        that.init();
        that.copy.onmousedown=function(e){
            var startx= e.offsetX;
            var starty= e.offsetY;
            that.cobj.beginPath();
            that.cobj.moveTo(startx,starty)
            that.copy.onmousemove=function(e){
                var endx= e.offsetX;
                var endy= e.offsetY;
                that.cobj.lineTo(endx,endy);
                that.cobj.stroke();
            }
            that.copy.onmouseup=function(){
                that.cobj.closePath();
                that.arr.push(that.cobj.getImageData(0,0,that.w,that.h));
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
            }
        }
    },
    five:function(startx,starty,endx,endy){
        var r=Math.sqrt((endx-startx)*(endx-startx)+(endy-starty)*(endy-starty));
        /*外圆半径*/
        var r1=r/3;
        /*内圆半径*/
        this.cobj.beginPath();
        this.cobj.moveTo(startx+r,starty);
        /*第一点在外圆*/
        for(var i=1;i<10;i++){
            if(i%2==0){
                /*外圆的五个点*/
                this.cobj.lineTo(Math.cos(36*i*Math.PI/180)*r+startx,Math.sin(36*i*Math.PI/180)*r+starty)
            }else if(1%2==1){
                /*内圆的五个点*/
                this.cobj.lineTo(Math.cos(36*i*Math.PI/180)*r1+startx,Math.sin(36*i*Math.PI/180)*r1+starty)
            }
        }
        this.cobj.lineTo(startx+r,starty)
        this.cobj[this.type]();
        this.cobj.closePath();
    },
    /*橡皮工具*/
    xiangpi:function(obj) {
        var that = this;
        that.init();
        var w=obj.width();
        var h=obj.height();
        obj.css({
            display: "block"
        });
        this.copy.onmousemove = function (e) {
            var cx = e.offsetX;
            var cy = e.offsetY;
            var lefts = cx - w / 2;
            var tops = cy - h / 2;
            if (lefts <= 0) {
                lefts = 0;
            }
            if (lefts >= (that.w - w)) {
                lefts = that.w - w;
            }
            if (tops <= 0) {
                tops = 0;
            }
            if (tops >= (that.h - h)) {
                tops = that.h - h;
            }
            obj.css({
                left: lefts,
                top: tops
            })
        }
        /*让div移动*/
        that.copy.onmousedown = function () {
            that.init();
            that.copy.onmousemove = function (e) {

                var lefts = e.offsetX - w / 2;
                var tops = e.offsetY - h / 2;
                if (lefts <= 0) {
                    lefts = 0;
                }
                if (lefts >= (that.w - w)) {
                    lefts = that.w - w;
                }
                if (tops <= 0) {
                    tops = 0;
                }
                if (tops >= (that.h - h)) {
                    tops = that.h - h;
                }
                obj.css({
                    left: lefts,
                    top: tops
                });
                /*div跟着鼠标移动*/
                that.cobj.clearRect(lefts,tops,w,h);
                /*清除橡皮区域内的样式*/
            };
            that.copy.onmouseup = function () {

                that.arr.push(that.cobj.getImageData(0, 0, that.w, that.h));
                that.copy.onmousemove = null;
                that.copy.onmouseup = null;
                that.copy.ondblclick=function(){
                    obj.css({
                        display: "none"
                    });
                    return
                }
                that.xiangpi(obj);
            }
        }
    },
    /*选择*/
    slice:function(obj){
        var that=this;
        that.init();
        var w, h,minx,miny;
        /*minx miny记录了选择框的定位    w  h  宽高*/
        that.copy.onmousedown=function(e){
            var startx= e.offsetX;
            var starty= e.offsetY;
            that.copy.onmousemove=function(e){
                var endx= e.offsetX;
                var endy= e.offsetY;
                minx=startx<endx?startx:endx;
                miny=starty<endy?starty:endy;
                w=Math.abs(startx-endx)
                h=Math.abs(starty-endy)
                obj.css({
                    display:"block",left:minx,top:miny,width:w,height:h
                })
            }
            /*鼠标抬起  意味这选择框画完*/
            that.copy.onmouseup=function(){
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
                that.temp=that.cobj.getImageData(minx,miny,w,h);
                that.cobj.clearRect(minx,miny,w,h);
                that.arr.push(that.cobj.getImageData(0,0,that.w,that.h));
                that.cobj.putImageData(that.temp,minx,miny)
                that.drag(minx,miny,w,h,obj);


            }
        }


    },
    drag:function(minx,miny,w,h,obj){

        var that=this;
        that.init();
        that.copy.onmousemove=function(e){
            var cx= e.offsetX;
            var cy= e.offsetY;
            if((cx>minx)&&(cx<(minx+w))&&(cy>miny)&&(cy<(miny+cy))){
                that.copy.style.cursor="move"
            }else{
                that.copy.style.cursor="default";
                return;
            }
        }
        /*鼠标移动到选择框上时改变样式*/
        that.copy.onmousedown=function(e){
            var cx= e.offsetX;
            var cy= e.offsetY;
            var ox=cx-minx;
            var oy=cy-miny;
            if((cx>minx)&&(cx<(minx+w))&&(cy>miny)&&(cy<(miny+cy))){
                that.copy.style.cursor="move"
            }else{
                that.copy.style.cursor="default";
                return;
            }
            that.copy.onmousemove=function(e){
                that.cobj.clearRect(0,0,that.w,that.h);
                if(that.arr.length>0){
                    that.cobj.putImageData(that.arr[that.arr.length-1],0,0)
                }
                var movex= e.offsetX;
                var movey= e.offsetY;
                var lefts=movex-ox;
                var tops=movey-oy;
                if(lefts<0){
                    lefts=0
                }
                if(lefts>that.w-w){
                    lefts=that.w-w
                }
                if(tops<0){
                    tops=0
                }
                if(tops>that.h-h){
                    tops=that.h-h
                }
                obj.css({left:lefts,top:tops})
                minx=lefts;
                miny=tops;
                that.cobj.putImageData(that.temp,minx,miny);
            }
            that.copy.onmouseup=function(){
                that.copy.onmousemove=null
                that.copy.onmouseup=null
                that.drag(minx,miny,w,h,obj);
                that.copy.ondblclick=function(){
                    that.temp=that.cobj.getImageData(0,0,that.w,that.h)
                    obj.css("display","none");
                    that.cobj.putImageData(that.temp,0,0)
                }
            }
        }
    }


}