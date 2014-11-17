$(document).ready(function() {
	
	var viewport_height=$(window).height();
	var viewport_width=$(window).width();
	var body_height=$('body').height();
	if(viewport_height>body_height){
		$('body').height(viewport_height);   
	}
	


	//rule popbox
	$('#check_rule').click(function(){
		$('#pop_rules').fadeIn();
	});

	$('.pop_close').click(function(){
		$('#pop_rules').hide();
		return false;
	})


	//share pop
	$('#btn_share_timeline').click(function(){
		$('#pop_share').fadeIn();
		return false;
	})



	



	

});




