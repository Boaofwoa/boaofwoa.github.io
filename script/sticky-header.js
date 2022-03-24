$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.my-header').addClass("sticky");
    }   
    else{
    $('.my-header').removeClass("sticky");
    }
    });