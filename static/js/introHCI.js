'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("changed it, woo!");
		$(".jumbotron p").Class("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(changeForm);
}

function changeForm(){
	var projectName = $("#project").val();
	var newWidth = $("#width").val();
	var newDescription = $("#description").val();
	// console.log(projectName);
	// console.log(newWidth);
	// console.log(newDescription);
	$(projectName).find(".project-description").text(newDescription);
	$(projectName).width(newWidth);

}


function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
     e.preventDefault();

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       description.hide();
    }
	
}