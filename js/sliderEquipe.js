$(function(){

	var delay = 3000;  //Tempo de delay 
	var curIndex = 0; //índice atual 
	var amt; //Contagem 

	initSlider(); //Função para iniciar o slider
	autoPlay(); //Tocar automaticamente 
 
	function initSlider(){
		amt = $('.sobre-autor').length; //amt é a quantidade de elementos(no caso 3 )
		var sizeContainer = 100 * amt; //Tamanho do container é quanto em porcentagem de elementos
		var sizeBoxSingle = 100 / amt; //Tamanho da box para ter os elementos
		$('.sobre-autor').css('width',sizeBoxSingle+'%'); // Setando o tamanho dinamicamente
		$('.scroll-wraper').css('width',sizeContainer+'%');  //Setando o tamanho do container dinamicamente


		for(var i = 0; i < amt; i++){ //Looping para ir auto 
			if(i == 0) 
				$('.slider-bullets').append('<span style="background-color:rgb(170,170,170);"></span>'); //Adiciona um estilo 
			else
				$('.slider-bullets').append('<span></span>'); //Adiciona um estilo 
		}

	}

	function autoPlay(){ 
		setInterval(function(){ //Setar a função em um determinado tempo 
			curIndex++; // indice atual  maior que 0
			if(curIndex == amt) //Se o índice atual encerrar com (0 à 3)
				curIndex = 0; 
			goToSlider(curIndex);  //Voltar para o índice atual 
		},delay)
	}

	function goToSlider(curIndex){
		var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left; 
		$('.slider-bullets span').css('background-color','rgb(200,200,200)');
		$('.slider-bullets span').eq(curIndex).css('background-color','rgb(170,170,170)');
		$('.scrollEquipe').stop().animate({'scrollLeft':offSetX+'px'});

	}

	$(window).resize(function(){
		$('.scrollEquipe').stop().animate({'scrollLeft':0});
	})


})