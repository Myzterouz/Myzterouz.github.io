$( document ).ready(function() {
    setup();
    console.log( "ready!" );
    $("#backButton").on("click", function(){
        goBack();
    });    
    $("img.card-img-top").on("click", function() {
        loadhtml("info");
    });      
});


function setup(){
    $("#backButton").hide();
    $("#img1").attr("src",img1);
    $("#img2").attr("src",img2);
    $('#img1').parent().find('.card-title').text(user1);
    $('#img1').parent().find('.card-title').addClass("text-uppercase");
    $('#img2').parent().find('.card-title').text(user2);
    $('#img2').parent().find('.card-title').addClass("text-uppercase");
    $('#img1').parent().find('.card-text').text(text1);
    $('#img2').parent().find('.card-text').text(text2);
    $("#backButton").attr("href",indexhtml);
    $('.four_zero_four_bg').css('background-image', 'url(' + gif_404 + ')');
}

function  loadhtml(mode){
    const container = $(".container");
    fetch(`./views/${mode}.html`)
        .then(res => {
            if(res.ok){
                return res.text();
            }
        })
        .then(html =>{
            $("#backButton").show();       
            container.html(html);
        });
}

function goBack() {
    $("#backButton").hide();
}