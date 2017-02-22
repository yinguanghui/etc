;$(document).ready(function(){
	var hh = $(window).height();
	var h = hh*0.6;
	//数量加减
	(function(){
		$('.add').click(function(){
            var num =$(this).prev().text();
            num++;
            $(this).prev().text(num);
        })

        $('.reduce').click(function(){
            var num =$(this).next().text();
            if(num>1){
                num--;
                $(this).next().text(num);
            }
        });
	})();
	//弹窗
	//遮罩和箭头变换
	(function(){
		var $spec_p = $('.spec_p'),
			$dark = $('.dark'),
			$spec_text = $('.spec_text'),
			$close = $('.close'),
			$spec_p_i = $('spec_p i');
		$spec_p.click(function(){
			$spec_p_i.addClass('glyphicon-chevron-down red');
			$dark.css('height',hh);
			$spec_text.css('height',h);
			$spec_text.show(500);
			//修改规格
			var text = $('.spec_span').text();
			$('.spec_span_2').text(text);
		});
		//关闭弹窗
		$close.click(function(){
			$spec_text.hide(500);
			$dark.css('height',0);
			$spec_p_i.removeClass('glyphicon-chevron-down red').addClass('glyphicon-chevron-right')
		});
	})();
	(function(){
		//滚动列表
		var $spec_list_p = $('.spec_list_p'),
			$spec_span_2 = $('.spec_span_2'),
			$spec_list   = $('.spec_list');

		$spec_list_p.click(function(){
			$(this).addClass('fl');
			$spec_span_2.hide().next().hide();
			$spec_list.show();
		});
		
		$('.spec_ul li').click(function(){
			$(this).addClass('spec_ul_click').siblings('.spec_ul li').removeClass('spec_ul_click');
			var text = $(this).text();
			$spec_list.hide();
			$spec_list_p.removeClass('fl');
			$spec_span_2.text(text).show().next().show();
			$('.spec_span').text(text);
		});
	})();
	(function(){
		//包装单位选择
		$('.pcs span').click(function(){
			$(this).addClass('spec_ul_click').siblings('.pcs span').removeClass('spec_ul_click');
		});
	})();
	//收藏icon转换
	$('.product_footer_nav>ul>li:first-child').click(function(){
    var src = 'img/goods/evaluate_07_02_01.png';
    var img = $(this).find('img');
    if (img.attr('src') =='img/goods/evaluate_07_02.png') {
      img.attr('src',src);
    }else{
      img.attr('src','img/goods/evaluate_07_02.png');
    };
  });
});