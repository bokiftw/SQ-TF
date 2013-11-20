/**
* Function which animates shuffle text effect 
*/
$(function(){
	
	// container is the DOM element;
	// userText is the textbox
	
	var container = $("#shuffle")
		userText = $('#shuffle_text'); 
	
	// Shuffle the contents of container
	container.shuffleLetters();
});