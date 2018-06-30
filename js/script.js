$(function(){
    //product detail view load - 직접 작성
    $("#quickviewBtnS8221CTS70").click(function(){
        $.ajax({
            type : "post",
            url : "./product/neopren_shirts20180524.html",
            dataType : "html",
            success : function(result) {
               $("body").html(result);    
            }
         });
    });
    
    
    // navigation animate - 직접 작성
    $("#lnbNav .heading-title").mouseenter(function() {
        $(this).css({"background-color":"#d9121f","color":"#fff"}).next(".lnb-menu01").addClass("active");
    });
    $(".categories-area").mouseleave(function(){
        $(this).find(".heading-title").css({"background-color":"#fafafa","color":"#333"}).next(".lnb-menu01").removeClass("active");
        
    });
    
    $("#lnbNav .dropdown").hover(function() {
        $(this).addClass("active").find(".dropdown-menu");
    }, function() {
        $(this).removeClass("active").find(".dropdown-menu");
    });
    
});

//carousel animate - owl carousel plugin 사용
$(function(){
    $("#carouselNewProduct .owl-carousel").owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4,
                dots:false,
                loop:false
            }
        }
    });
    
    $("#carouselWeeklyProduct .owl-carousel").owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:6,
                dots:false,
                loop:false
            }
        }
    });
    
    var owl = $(".owl-carousel");
    owl.owlCarousel();

    $(".product-area .carousel-prev").click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $(".product-area .carousel-next").click(function() {
        owl.trigger('next.owl.carousel');
    });
});