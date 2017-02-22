$(document).ready(function () {
	//回到顶部按钮
	var $_window = $(window);
		$_window.scroll(function(){
			if ($_window.scrollTop()> $_window.height()/2) {
				$('#returnTop').css('display','block');
			} else{
				$('#returnTop').css('display','none');
			};
		});
		$("#returnTop").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 });
}); 