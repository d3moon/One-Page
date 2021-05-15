$(function(){
	$('nav a').click(function(){ //Quando clicar no link ... 
		var href = $(this).attr('href'); //O endereço do nav a com o atributo href
		var offSetTop = $(href).offset().top; //Pegar o href do link e setar a posição no caso no topo

		$('html,body').animate({'scrollTop':offSetTop}); //Animar com scroll no topo da posição do href.

		return false; //Para não carregar e mudar o index da página.
	})
})