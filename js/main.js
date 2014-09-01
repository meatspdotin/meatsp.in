var spins = 0

$(document).ready(function() {
	setInterval(function() {
		spins++;
		$("#spins").html(spins.toString());

		if (Math.round(Math.random() * 100) > 98) {
			$(".container").css("max-width", "90%");
		
		} else if (Math.round(Math.random() * 100) < 3) {
 			$(".container").addClass("spin");
 			setTimeout(function() {
 				$(".container").removeClass("spin")
 			}, 3000);
		} else {
			$(".container").css("max-width", "600px");
		} 
	}, 380);
});