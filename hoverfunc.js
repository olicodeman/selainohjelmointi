$(document).ready(function(){

    $("li").hover(function(){ // Homepage hover effect
        $(this).css("background-color", "#60B3D1")
        $(this).css("border-radius", "15px")
    },

    function(){
        $(this).css("background-color", "#012641")
    })

});