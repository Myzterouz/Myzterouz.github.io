$( document ).ready(function() {
    setup();
    console.log( "ready!" );
});


function setup(){
    $("#img1").attr("src",img1);
    $("#img2").attr("src",img2);
    $('#img1').parent().find('.card-title').text(user1);
    $('#img1').parent().find('.card-title').addClass("text-uppercase");
    $('#img2').parent().find('.card-title').text(user2);
    $('#img2').parent().find('.card-title').addClass("text-uppercase");
    $('#img1').parent().find('.card-text').text(text1);
    $('#img2').parent().find('.card-text').text(text2);
}