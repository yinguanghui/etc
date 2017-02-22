;$(document).ready(function(){
	$('.ul1 li').click(function(){
		$(this).addClass('classify_list_ul1_add').siblings('.ul1 li').removeClass('classify_list_ul1_add');
		var index = $(this).index();
		$('.ul2').eq(index).slideDown().siblings('.ul2').hide();
	});
/*function touch(tch,tch2){
	var touch1 = $('#'+tch);
	var startY,endY;/*endX,startX,
//左右滑动请自行修改
//假定接受手指触摸事件的Dom对象id是"touchBox"
	document.getElementById(tch).addEventListener("touchstart", touchStart, false);
	document.getElementById(tch).addEventListener("touchmove", touchMove, false);
	document.getElementById(tch).addEventListener("touchend", touchEnd, false);
function touchStart(event){
	var touch = event.touches[0];
	    startY = touch.pageY;
}
function touchMove(event){
    var touch = event.touches[0];
		endY = (startY-touch.pageY);
		var top = touch1.position().top
	if(top ==0){
			touch1.css('top',endY);
	}
	else{
			touch1.css('top',top+endY);

	}
	stop();
}
function touchEnd(event){
	var top = touch1.position().top;
	top += endY;
	touch1.css('top',top);
	stop();
}
function stop(){
	var height = $('.'+ tch2 +':visible').height(),  
        y = h - height,
        top = touch1.position().top;
	if( top >= 0) {
		top = 0;
		touch1.css('top',0);

	} else if(top < y && y<0){
		touch1.css('top',y-20);
		
	}else if(y>0){
		touch1.css('top',0);
	};	
}
};
touch('classify_touch1','classify_list_ul1');
touch('classify_touch2','classify_list_ul2');*/
});