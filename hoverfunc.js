$(document).ready(function(){

    $("li").hover(function(){ // Hover effect for navbar
        $(this).css("background-color", "darkslategray")
        $(this).css("border-radius", "15px")
    },

    function(){
        $(this).css("background-color", "white")
    })

});