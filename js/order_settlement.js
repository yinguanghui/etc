$(document).ready(function(){
	$('#pay_for').click(function(){
		$.dialog({
			type : 'confirm',
			onClickOk : function(){
				$('input[type=radio]').each(function(){
					var val=$('input:radio[name="pay"]:checked').val();
					if (val == 1) {
						$('#pay_for').find('.order_set_title2').text("货到付款");
					} else{
						$('#pay_for').find('.order_set_title2').text("支付宝");
					};
				});
			},
			contentHtml : '<p class="bb_1">请选择付款方式</p><p class = "fn_14"><input type = "radio" name= "pay" checked value="1">&nbsp;&nbsp;&nbsp;<span>货到付款</span></p><p class = "fn_14"><input type = "radio" name= "pay" value="2">&nbsp;&nbsp;&nbsp;<span>支付宝</span></p>'
		});
	});
	$('.order_footer_btn').click(function(){
		var pay = $('#pay_for .order_set_title2').text();
		if(pay =="货到付款"){
			window.location.href = "cash.html";
		}else{
			window.location.href = "pay_immediately.html";
		}
	});
	$('#btn_03').click(function(){
		$.dialog({
			type : 'confirm',
			onClickOk : function(){
				$('input[type=radio]').each(function(){
					var val= $('input:radio[name="yiyuan"]:checked').next().text();
					$('#coupon').text(val);
				});
			},
			contentHtml : '<p class="bb_1">请选择优惠券</p><p class = "fn_14"><input type = "radio" name= "yiyuan" checked>&nbsp;&nbsp;&nbsp;<span>优惠券1</span></p><p class = "fn_14"><input type = "radio" name= "yiyuan">&nbsp;&nbsp;&nbsp;<span>优惠券2</span></p><p class = "fn_14"><input type = "radio" name= "yiyuan" value="3">&nbsp;&nbsp;&nbsp;<span>优惠券3</span></p>'
		});
	});
});