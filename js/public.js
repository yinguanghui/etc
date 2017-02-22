$(document).ready(function () { 
	(function(){
		var $_window = $(window);
		var $_returnTop = $('#returnTop');
		$_window.scroll(function(){
			if ($_window.scrollTop()> $_window.height()/2) {
				$_returnTop.css('display','block');
			} else{
				$_returnTop.css('display','none');
			};
		});
		$_returnTop.click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 		})
	});

	//分类页面列表切换
	(function(){
        var height = $(window).height() - $('header').height()*2;
        $('#wrapper').css('height',height);
    	$('#wrapper2').css('height',height);
    	var $ul1_li = $('.ul1 li'),
      		$ul2    = $('.ul2');
   			 $ul1_li.click(function(){
    			$(this).addClass('classify_list_ul1_add').siblings($ul1_li).removeClass('classify_list_ul1_add');
   				 var index = $(this).index();
    				$ul2.eq(index).slideDown().siblings($ul2).hide();
    			});
  	})();
		
		
	function radioClick(radio){
		radio.click(function(){
		var icon = $(this).children('i');
		if(icon.hasClass('red')){
			return;
		}else{
			radio.children('i').removeClass('glyphicon-check red').addClass('glyphicon-unchecked');
			icon.removeClass('glyphicon-unchecked').addClass('glyphicon-check red');
		}
	});
	};


	//修改默认地址
	(function(){
        $('.address_user_btn1 i').click(function(){
          if ($(this).hasClass('glyphicon-check')){
            $(this).removeClass('glyphicon-check red').addClass('glyphicon-unchecked gray');
          }else{
            $('.address_user_btn1 i').removeClass('glyphicon-check red').addClass('glyphicon-unchecked gray');
            $(this).removeClass('glyphicon-unchecked gray').addClass('glyphicon-check red');
          };
        });
      })();

      
	//收藏icon转换
	function up_img(file , img){
		file.bind('change',function(){
        var val = file.val();
        img.val(val);
      })
	};
	radioClick($('.invoice_header_radio span'));
	radioClick($('.invoice_text_radio span'));
	up_img($('#application_file1'),$('#up_img1'));
	up_img($('#application_file2'),$('#up_img2'));
}); 