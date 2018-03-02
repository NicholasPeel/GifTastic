

var buttonArray = [];
var animals = ["Cats", "Dogs", "Birds", "Reptiles", "Shark"];


//start the page
pageLoad();


//run the page
function pageLoad(){

	renderButtons();

}

// Function for displaying movie data
function renderButtons() {

	$(".buttons").empty();

    for (var i = 0; i < animals.length; i++) {

    	var button = $("<button>");
        button.addClass("animal");
        button.attr("data-name", animals[i]);
        button.text(animals[i]);
        $(".buttons").append(button);
    
    }
}

// This function handles events where submit button is clicked
$("#submit").on("click", function(event) {
        
	event.preventDefault();

    var animal = $("#input").val().trim();
    animals.push(animal);
    renderButtons();
    $("#input").val("");

});

$(document).on("click", ".animal", function(){

	$(".gifs").empty();
	$(".gifs2").empty();

	var animal = $(this).attr("data-name");
	
   	var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=PQh4kgR84bnL5lALgfRPXSd4YSXAFrAm&tag=" + animal;

	for (var i = 0; i < 5; i++) {

    	$.ajax({
    		url: queryURL,
        	method: "GET"
    	}).then(function(response) {

    		var animalDiv = $("<div>");

        	var gif = $('<img>');

        	gif.attr("src", response.data.images.fixed_width_still.url);
	 		gif.attr("state", "still");
			gif.attr("still", response.data.images.fixed_width_still.url);
			gif.attr("animate", response.data.images.fixed_width_downsampled.url);
			gif.addClass("gif");

        	animalDiv.append(gif);

        	$(".gifs").append(animalDiv);

    	});
	}
	for (var i = 0; i < 5; i++) {

    	$.ajax({
    		url: queryURL,
        	method: "GET"
    	}).then(function(response) {

    		var animalDiv = $("<div>");

        	var gif = $('<img>');

        	gif.attr("src", response.data.images.fixed_width_still.url);
	 		gif.attr("state", "still");
			gif.attr("still", response.data.images.fixed_width_still.url);
			gif.attr("animate", response.data.images.fixed_width_downsampled.url);
			gif.addClass("gif");

        	animalDiv.append(gif);

        	$(".gifs2").append(animalDiv);

    	});
	}

});

$(document).on("click",".gif", function() {
        
	var state = $(this).attr("state");

    if (state === "still") {

    	$(this).attr("src", $(this).attr("animate"));
        $(this).attr("state","animate");

    }
    if (state === "animate") {

    	$(this).attr("src", $(this).attr("still"));
        $(this).attr("state","still");

    }
        
});







