$(function(){

	$('.mobile-menu').click(function(){    //Chamando o menu mobile no HTML e a função click
		$('.mobile-menu').find('ul').slideToggle(); //Encontrando a ul e o efeito para revelar/esconder
	})
})