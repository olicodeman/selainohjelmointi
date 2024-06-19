$(document).ready(function(){

    $("li").hover(function(){ // Homepage hover effect
        $(this).css("background-color", "darkslategray")
        $(this).css("border-radius", "15px")
    },

    function(){
        $(this).css("background-color", "white")
    })

});