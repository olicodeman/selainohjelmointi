$(document).ready(function(){ // Hover effect for navbar

    $("li").hover(function(){ 
        $(this).css("background-color", "darkslategray") // changes backround color, border radius and font color when hovered over
        $(this).css("border-radius", "15px")
        $(this).find(".nav-link").css("color", "white")

        
    },

    function(){ // Brings css styles back to normal when there is no more hovering
        $(this).css("background-color", "white")
        $(this).find(".nav-link").css("color", "black")
    })

});