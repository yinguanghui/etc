$(document).ready(function(){
	(function(){
		var $goods_evaluation_nav_li = $('.goods_evaluation_nav ul li');
		var $goods_evaluation_ul = $('.goods_evaluation_ul');
		$goods_evaluation_nav_li.click(function(){
			var index = $(this).index();
			$(this).addClass('red').siblings($goods_evaluation_nav_li).removeClass('red');
			$goods_evaluation_ul.eq(index).show(500).siblings($goods_evaluation_ul).hide(500);
		});
	})();
	//弹窗
	(function(){
		var height = $(window).height()-$('header').height();
		$('.goods_evaluation_btn .red').click(function(){
			$('.goods_evaluation_esc').show();
			$('.dark').css({'height':height,'margin-top':$('header').height()});
			$('.evaluation_popup').show(500);
		});
		$('.goods_evaluation_esc').click(function(){
			$('.dark').css('height',0);
			$('.evaluation_popup').hide(500);
			$(this).hide();
		});
		$('.evaluation_popup_start span').click(function(){
			var start = $('.evaluation_popup_start span');
			var index = $(this).index();
			var len = start.length;
			start.slice(0,index+1).addClass('start_good').removeClass('start_bad');
			start.slice(index+1,len).removeClass('start_good').addClass('start_bad');
			});
		})();
	});