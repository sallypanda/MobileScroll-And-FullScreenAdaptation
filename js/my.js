/**
*添加横竖屏切换事件侦听
*参数:
**/
var initOnResize = function(opt){
	//定义配置
	var option = {
		landscapeFun:opt.landscapeFun,//定义横屏事件
		portraitFun:opt.portraitFun//定义竖屏事件
	}

	//判断是否支持Orientation
	var supportOrientation = (typeof window.orientation === 'number' &&
            typeof window.onorientationchange === 'object');
	var OrientationFun = function(){
	    var orientation;
	    if(supportOrientation){
	        orientation = window.orientation;
	        switch(orientation){
	            case 90:
	            case -90:
	                orientation = 'landscape';
	                break;
	            default:
	                orientation = 'portrait';
	                break;
	        }
	    }else{
	        orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
	    }

	    
	    switch(orientation){
	    	case "landscape":
	    		option.landscapeFun();//横屏事件触发
	    		break;
	    	case "portrait":
	    		option.portraitFun();//竖屏事件触发
	    		break;
	    }
	}
	
    this.addOnResize = (function(){
		if(supportOrientation){
	        window.addEventListener('orientationchange',OrientationFun,false);
	    }else{
	        //监听resize事件
	        window.addEventListener('resize',OrientationFun,false);
	    }
	    OrientationFun();
    })();
	this.removeOnResize=function(){
		if(supportOrientation){
        	window.removeEventlistener('orientationchange',OrientationFun);
	    }else{
	        //监听resize事件
	        window.removeEventlistener('resize',OrientationFun);
	    }
	}
}
