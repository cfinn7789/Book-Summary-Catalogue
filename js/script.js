$( "#current-btn" ).on("click", function(event) {
	document.location.replace('./current.html');
}); // Clicking the button takes you to the current reads page

$( "#favorites-btn" ).on("click", function(event) {
	document.location.replace('./favorites.html');
}); // Clicking the button takes you to the favorites page

$( "#list-btn" ).on("click", function(event) {
	document.location.replace('./list.html');
}); // Clicking the button takes you to the list of books page