// $('.card').click(function(){
//   $(this).toggleClass('flipped');
// });

$('.card').hover(function(event) {
	event.preventDefault();
  $(this).toggleClass('flipped');
  // $(this).removeClass('.card');	
});