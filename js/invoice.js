;$(document).ready(function(){
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