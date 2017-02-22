;$(document).ready(function(){
	$('.order_number_img').click(function(){
          var _this = $(this);
          $.dialog({
          type : 'confirm',
          onClickOk : function(){
            _this.parent().parent().remove();
        },
      contentHtml : '<p>您确定要删除这一项吗？</p>'
    });   
    });
  $('.order_confirm').click(function(){
     $.dialog({
          type : 'confirm',
          onClickOk : function(){
            
        },
      contentHtml : '<p class="tc">您确定已经收到商品？</p>'
    });   
  });
})