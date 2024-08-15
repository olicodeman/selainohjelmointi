$(document).ready(function(){ // Hover effect for navbar

    $("li").hover(function(){ 
        $(this).css("background-color", "darkslategray")
        $(this).css("border-radius", "15px")
        $(this).find(".nav-link").css("color", "white")

        
    },

    function(){
        $(this).css("background-color", "white")
        $(this).find(".nav-link").css("color", "black")
    })

});