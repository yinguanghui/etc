$(document).ready(function(){
    (function(){
        //商品复选框
        $('.shopping_cart_i').find('i').click(function(){
            if($(this).hasClass('glyphicon-check')){
            	$(this).removeClass('glyphicon-check red').addClass('glyphicon-unchecked shoppingcart_gray');
            }else{
            	$(this).removeClass('glyphicon-unchecked shoppingcart_gray').addClass('glyphicon-check red');
            }
            total();
            Checked();
        });
        //全选，全不选
        $('.shopping_cart_total i').click(function(){
        	if($(this).hasClass('glyphicon-check')){
        		$(this).removeClass('glyphicon-check red').addClass('glyphicon-unchecked shoppingcart_gray');
        		$('.shopping_cart_i').find('i').removeClass('glyphicon-check red').addClass('glyphicon-unchecked shoppingcart_gray');
        	}else{
        		$(this).addClass('glyphicon-check red').removeClass('glyphicon-unchecked shoppingcart_gray');
        		$('.shopping_cart_i').find('i').removeClass('glyphicon-unchecked shoppingcart_gray').addClass('glyphicon-check red');
        	}
        	total();
            Checked();
        })
        $('.shopping_goods_unit span').click(function(){
            $(this).addClass('border_red').siblings('.shopping_goods_unit span').removeClass('border_red');
        });
        //数量加减
	   $('.add').click(function(){
            var num =$(this).prev().text();
            num++;
            $(this).prev().text(num);
            total();
        })

        $('.reduce').click(function(){
            var num =$(this).next().text();
            if(num>1){
                num--;
                $(this).next().text(num);
                total();
            }
        });
        $('.remove').click(function(){
          var _this = $(this);
          $.dialog({
      type : 'confirm',
      onClickOk : function(){
        _this.parent().parent().parent().remove();
        Checked();
        total();
      },
      contentHtml : '<p>您确定要删除这一项吗？</p>'
    });   
     });
        //显示选择的商品数量
       function Checked(){
             var num = $('.shopping_cart_i i').length;
             $('.shopping_cart_i i').each(function(){
                if ($(this).hasClass('glyphicon-unchecked')) {
                  $('.shopping_cart_total i').removeClass('glyphicon-check red').addClass('glyphicon-unchecked shoppingcart_gray');
                    num--; 
                     }
             $('.shopping_cart_btn2').text(num);
                if(num == $('.shopping_cart_i i').length){
                   $('.shopping_cart_total i').addClass('glyphicon-check red').removeClass('glyphicon-unchecked shoppingcart_gray');
             }
            });
          };
          //商品总价
        function total(){
            var str = 0;
            $('.shopping_cart_ul li').each(function(){
                if($(this).find('.shopping_cart_i i').hasClass('glyphicon-check')){
                	var num1 = $(this).find('.shopping_money').text();
                	var num2 = $(this).find('.shopping_goods_num').text()
                    var num3 = mul(num1,num2).toFixed(2);
                    str = add_1(num3,str)
                }
            })
            $('.shoppingcart_total').html(str);
        };
        function mul(a, b) {
            var c = 0,
                d = a.toString(),
                e = b.toString();
            try {
                    c += d.split(".")[1].length;
                } catch (f) {}
            try {
                    c += e.split(".")[1].length;
                } catch (f) {}
                    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
                }
        function add_1(a, b) {
            var c, d, e;
            try {
                    c = a.toString().split(".")[1].length;
                } catch (f) {
                    c = 0;
                }
            try {
                    d = b.toString().split(".")[1].length;
                } catch (f) {
                    d = 0;
                }
                    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
                }
        total();
        Checked();
    })();
});