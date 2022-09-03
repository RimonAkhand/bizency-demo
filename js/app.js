$(function(){

    //jquery code start//
    let navBar = $(".navBar");
    
    $(window).scroll(function(){
     let scrolltop = $(window).scrollTop();
     
     if(scrolltop > 176 ){
        navBar.addClass("navFixed");
    }
        else{
            navBar.removeClass("navFixed");
     }
    });
    
    $(window).ready(function(){
        let preload = $(".preloader");
        preload.delay(1000).fadeOut(500);
    });
});