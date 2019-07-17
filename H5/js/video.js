    var speed=1; //播放速度
    var volume=1; //播放音量
    var myVideo = document.getElementById("myVideo");
    var btnPlay = document.getElementById("btn_play"); //播放
    var btnForward = document.getElementById("btn_forward"); //快播
    var btnRewind = document.getElementById("btn_rewind"); //慢播
    var btnMuted = document.getElementById("btn_muted");
    var btnFullscreen = document.getElementById("btn_fullscreen"); //全屏
    var cur = document.getElementById("spn_current");
    var total = document.getElementById("spn_total");
    var btnVolume = document.getElementById("btn_volume"); //音量
    var rng_progress = document.getElementById("ipt_progress");
    var rng_volume = document.getElementById("ipt_volume");

	/*播放*/
    function playPause(){
		if(myVideo.paused) {
			btnPlay.value="暂停";
			myVideo.play();
			//启动控制工具条其他按钮
			btnForward.disabled="";
			btnRewind.disabled="";
			btnMuted.disabled="";
			btnVolume.disabled="";
		} else{
			btnPlay.value="播放";
			myVideo.pause(); 
			//禁用控制条其他按钮
			btnForward.disabled="disabled";
			btnRewind.disabled="disabled";
			btnMuted.disabled="disabled";
			btnVolume.disabled="disabled";
		}		 
    }
			
	/*静音*/
   	function jingyin() {
	    if (myVideo.muted){
	        myVideo.volume = false;
	    } else{
	        myVideo.muted=  true;	        
	    }
	}
            
	/*全屏*/
	function FullScreen() {
	    var ele = document.documentElement;
	    if (ele .requestFullscreen) {
	        myVideo .requestFullscreen();
	    } else if (ele .mozRequestFullScreen) {
	        myVideo .mozRequestFullScreen();
	    } else if (ele .webkitRequestFullScreen) {
	        myVideo .webkitRequestFullScreen();
	    }
	}
				
	/*快播*/
    function setPlaySpeed(){ 
	  	myVideo.playbackRate=1.5;
	} 
            
	/*慢播*/
	function setPlaySpeed(){ 
	  	myVideo.playbackRate=0.5;
	} 
	/*音量*/
	function setvalue(){
	myVideo.volume=rng_volume.value/100;
	myVideo.muted=false;
	}

    
