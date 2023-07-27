$( "#current-btn" ).on("click", function(event) {
	document.location.replace('./current.html');
}); // Clicking the button takes you to the current reads page

$( "#favorites-btn" ).on("click", function(event) {
	document.location.replace('./favorites.html');
}); // Clicking the button takes you to the favorites page


// To Do: Learn how to create an API so that the summaries can be called when needed (reduces load on page)