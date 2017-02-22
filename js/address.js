;$(document).ready(function(){
  //修改收货地址
		(function(){
      var $address_user_btn1_i = $('.address_user_btn1 i');
        $address_user_btn1_i.click(function(){
          if ($(this).hasClass('glyphicon-check')){
            $(this).removeClass('glyphicon-check red').addClass('glyphicon-unchecked gray');
          }else{
            $address_user_btn1_i.removeClass('glyphicon-check red').addClass('glyphicon-unchecked gray');
            $(this).removeClass('glyphicon-unchecked gray').addClass('glyphicon-check red');
          };
        });
      })();
      (function(){
      	$('.address_user_btn3').click(function(){
      var _this = $(this);
    $.dialog({
      type : 'confirm',
      onClickOk : function(){
        _this.parent().parent().parent().remove();
      },
      contentHtml : '<p>您确定要删除这一项吗？</p>'
    });
  });
  })();
})