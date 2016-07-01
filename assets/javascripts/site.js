$('#circle').click(function() {
	$('h2').html("We <strong>changed</strong> the text!");
})

$('#circle').hover(function () {
	$(this).css('background','yellow');
})

$('.square').hover(function () {
	$(this).css('background','blue');
})

$(function(){
	$('#draggable').draggable();
})

$(function(){
	$('#resizable').resizable();
})