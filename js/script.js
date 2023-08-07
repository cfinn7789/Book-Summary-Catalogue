$( "#current-btn" ).on("click", function(event) {
	document.location.replace('./current.html');
}); // Clicking the button takes you to the current reads page

$( "#favorites-btn" ).on("click", function(event) {
	document.location.replace('./favorites.html');
}); // Clicking the button takes you to the favorites page


// To Do: 
// Install npms express, mysql, and sequelize
// Research Google Cloud for storing book summaries
// Add API calls to retrieve the information (localhost and google)
// Add back button when summaries are displayed
// Add CSS and update page structure
// Add author information to a database so that only one html is needed to display all authors

// Create an authors_db
// Create book title table
// Create favorites table
// Create current reads table

// Consider a Model-View-Controller for the structurally consistent pages