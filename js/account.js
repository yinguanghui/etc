;$(document).ready(function(){

	$('#btn_01').click(function(){
		$.dialog({
			type : 'confirm',
			onClickOk : function(){
				alert('你点了确定~~');
			},
			contentHtml : '<p class="bb_1">请选择头像修改方式</p><p class = "fn_14"><i class="glyphicon glyphicon-check red"></i>&nbsp;&nbsp;&nbsp;照相</p>'
		});
	});
	$('#btn_02').click(function(){
		$.dialog({
			type : 'confirm',
			onClickOk : function(){
				var text = $('.account_input').val();
				$('#btn_02').find('.account_user_text').eq(1).text(text);
			},
			contentHtml : '<p class="bb_1">请输入新昵称</p><p class = "fn_14">新昵称：<input type="text" class="account_input"></p>'
		});
	});
	$('#btn_03').click(function(){
		$.dialog({
			type : 'confirm',
			onClickOk : function(){
				$('input[type=radio]').each(function(){
					var val=$('input:radio[name="yiyuan"]:checked').val();
					if (val == 1) {
						$('#btn_03').find('.account_user_text').eq(1).text("公立");
					} else{
						$('#btn_03').find('.account_user_text').eq(1).text("私立");
					};
				});
			},
			contentHtml : '<p class="bb_1">请选择医院性质</p><p class = "fn_14"><input type = "radio" name= "yiyuan" checked value="1">&nbsp;&nbsp;&nbsp;<span>公立</span></p><p class = "fn_14"><input type = "radio" name= "yiyuan" value="2">&nbsp;&nbsp;&nbsp;<span>私立</span></p>'
		});
	});
	$('#btn_04').click(function(){
		$.dialog({
			type : 'confirm',
			onClickOk : function(){
				var text = $('.account_input').val();
				$('#btn_04').find('.account_user_text').eq(1).text(text);
			},
			contentHtml : '<p class="bb_1">请输入新电话号码</p><p class = "fn_14">新号码：<input type="text" class="account_input"></p>'
		});
	});
	$('#btn_05').click(function(){
		$.dialog({
			type : 'confirm',
			onClickOk : function(){
				var text = $('.account_input').val();
				$('#btn_05').find('.account_user_text').eq(1).text(text);
			},
			contentHtml : '<p class="bb_1">请输入新单位名称</p><p class = "fn_14">新单位：<input type="text" class="account_input"></p>'
		});
	});
	$('#btn_06').click(function(){
		$.dialog({
			type : 'confirm',
			onClickOk : function(){
				var text = $('.account_input').val();
				$('#btn_06').find('.account_user_text').eq(1).text(text);
			},
			contentHtml : '<p class="bb_1">请输入新电子邮箱</p><p class = "fn_14">新邮箱：<input type="text" class="account_input"></p>'
		});
	});
	$('#btn_07').click(function(){
		alert('插件')
	});
})