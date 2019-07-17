	
	var myVideo = document.getElementById("myVideo");
    var btnPlay = document.getElementById("btn_play"); //播放   
    var btn_quick = document.getElementById("btn_quick");//快进
    var btn_low = document.getElementById("btn_low");//后退
    var bs_main = document.getElementById("bs_main");//倍速
    var selRate = document.getElementById("selRate");
    var btnyinliang = document.getElementById("btn_yinliang"); //静音
    var rng_volume = document.getElementById("ipt_volume");//音量
    var btnFullscreen = document.getElementById("btn_fullscreen"); //全屏
    var progress = document.getElementById("ipt_progress");
    var cur = document.getElementById("spn_current");
    var total = document.getElementById("spn_total");
    
    myVideo.addEventListener('timeupdate',updateProgress,false);
    progress.onclick = progressOnclick;
    
    /*播放*/
    function playPause(){
		if(myVideo.paused) {
			btnPlay.src="img/stop.png";
			myVideo.play();
			//启动控制工具条其他按钮
			/*xxxxx*/

		} else{
			btnPlay.src="img/start.png";
			myVideo.pause(); 
			//禁用控制条其他按钮
			/*xxxx*/
		}		 
    }
    /*快进，后退*/
    function skip(value) {
        myVideo.currentTime += value;
    }
    
    /*倍速*/
    bs_main.onclick=function(){
    	if(selRate.style.display=="none"){
    		selRate.style.display="block";   		
    	}else {
    		selRate.style.display="none";
    	}
    }
    
	var speed1 = document.getElementById("speed1"); //0.5倍
	var speed2 = document.getElementById("speed2"); //1倍
	var speed3 = document.getElementById("speed3"); //1.25倍
	var speed4 = document.getElementById("speed4"); //1.5倍
	var speed5 = document.getElementById("speed5"); //2.0倍
	
	speed1.onclick=function(){
        myVideo.playbackRate = speed1.innerHTML;
        document.getElementById("selRate").style.display="none";
    }
	speed2.onclick=function(){		
        myVideo.playbackRate = speed2.innerHTML;
        document.getElementById("selRate").style.display="none";
    }
	speed3.onclick=function(){		
        myVideo.playbackRate = speed3.innerHTML;
        document.getElementById("selRate").style.display="none";
    }
	speed4.onclick=function(){		
        myVideo.playbackRate = speed4.innerHTML;
        document.getElementById("selRate").style.display="none";
    }
	speed5.onclick=function(){		
        myVideo.playbackRate = speed5.innerHTML;
        document.getElementById("selRate").style.display="none";
    }	
    
    /*静音*/
   	function jingyin(){
	    if(myVideo.volume>0){
	    	btnyinliang.src = "img/jingyin.png";
	        myVideo.volume = 0;
	    }else if(myVideo.volume==0){
	        myVideo.volume = 1;	 
	        btnyinliang.src = "img/yinliang.png";
	    }
	}
   	/*音量*/
	rng_volume.onmousemove=function(){
		myVideo.volume=rng_volume.value/100;
		myVideo.muted=false;
	}
   	/*全屏*/
	btnFullscreen.onclick=function() {
	    var ele = document.documentElement;
	    if (ele .requestFullscreen) {
	        myVideo .requestFullscreen();
	    } else if (ele .mozRequestFullScreen) {
	        myVideo .mozRequestFullScreen();
	    } else if (ele .webkitRequestFullScreen) {
	        myVideo .webkitRequestFullScreen();
	    }
	}
        

	/*播放进度条单击事件，*/
	function progressOnclick(e){
		if(e.offsetX)     //获取鼠标当前位置
		{
			myVideo.currentTime = myVideo.duration*(e.offsetX/progress.clientWidth);
			console.log(e.offsetX);
			//设定播放器新的播放位置
		} else{
			myVideo.currentTime = myVideo.duration*(e.clientX/progress.clientWidth)
		}
	}
	/*更新进度条状态*/
	function updateProgress(){
		var currentPercent = Math.round(Math.floor(myVideo.currentTime)/Math.floor(
			myVideo.duration)*100,0); //计算当前播放时长与总时长之比
			progress.value = currentPercent;
			cur.innerHTML = calculateTime(Math.floor(myVideo.currentTime));
			total.innerHTML = calculateTime(Math.floor(myVideo.duration));
			//将当前传入的时间转换为hh:MM:ss格式
			function calculateTime(time){
				var h;
				var m;
				var s;
				h = String(parseInt(time/3600,10));
				if(h.length==1){
					h = '0' + h;
				}
				m = String(parseInt((time%3600)/60,10));
				if(m.length==1){
					m = '0' + m;
				}
				s = String(parseInt(time%60),10);
				if(s.length==1){
					s = '0' + s;
				}
				return h + ":" + m + ":" + s;
			}
	
	}
