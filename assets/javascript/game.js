$(document).ready(function(){

	
	var wins = 0;
	var losses = 0;

	function computerRandomNumb() {
		var computersChoice = Math.floor(Math.random() * 40) + 1; 
		console.log(computersChoice)
		$("#compChoice").text(computersChoice);
	}
	computerRandomNumb();
});