/*
	date:2015-11-24
	loadScript({
		*url:url,         等待加载完成文件地址
		*success:function(){}, 加载完成回调
		charset:'utf-8||gbk', 指定数据编码方式
		cache:"false||true"     缓存  动态url
		   false 缓存
		   true  不缓存
	})
*/
function loadScript(option){
	if(!option.url||!option.success){return;}
	option.time=option.time==undefined?false:option.time;
	option.charset=option.charset||'utf-8';
	var script=document.createElement('script');
	script.src=option.time?option.url+'&_='+new Date().getTime():option.url;
	option.charset?script.charset=option.charset:null;
	document.getElementsByTagName("head")[0].appendChild(script);
	if(navigator.appName=="Microsoft Internet Explorer"){
		script.onreadystatechange=function(){		
			if(this.readyState=='loaded'){
				option.success()
			}
		}
	}else{
		script.onload=function(){
			option.success()
		}
	}
}