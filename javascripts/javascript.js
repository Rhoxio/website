 sayingArray = ['To change the world, you need only to speak your mind.', 'To live is to experience, and the art of learning is based upon it.', 'Inspiration is a product of passion, not a result of it.']

$( document ).ready(function(){
	$('.tagline').html(sayingArray[Math.floor(Math.random() * sayingArray.length)])
	
	var tagFadeIn = function(){
		$('.tagline').fadeIn(2000, function(){
			console.log("Fade done. Ready for callback.")
		})
	}


	var nameFadeIn = function(){
		$('.name-desc').fadeIn(1000, function(){
			tagFadeIn()
		})
	}

	nameFadeIn()	
})
 