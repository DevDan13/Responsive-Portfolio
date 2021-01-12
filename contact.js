console.log("it works");

$(document).ready(function () {
    $(".submit").on("click", function(event){
        event.preventDefault();
        console.log("clicked button");

        
    })
})