$(document).ready(function(){
    //ResizePage();
    $(".content#one").click(function() {
        $('html, body').animate({scrollTop: $(".content#two").offset().top}, 1000);
});
   $(".page1box#one").click(function() {
        $('html, body').animate({scrollTop: $(".content#three").offset().top}, 1000);
}); 
    
});

//function ResizePage() {
    //$('.page1box').css("height",$('.page1box').width());
    //$('.page1central').css("height",$(window).height()-$('.page1box').width()-$('.page1top').height());
    //$('.page2central').css("height",$(window).height()/2);
    //$('.page2bottom').css("height",$(window).height()/2);    
//}
    

//$(window).on('resize', function(){
//    ResizePage();
//});