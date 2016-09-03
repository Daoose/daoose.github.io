$(document).ready(function(){
    //ResizePage();
    // $(".content#one").click(function() {
    //     $('html, body').animate({scrollTop: $(".content#two").offset().top}, 1000);
    // });
    // $(".page1box#one").click(function() {
    //     $('html, body').animate({scrollTop: $(".content#three").offset().top}, 1000);
    // }); 
    var $dom = $('body');
    var $frame = $("iframe");
    var scroll = this.scrollTop;      

   
    $dom.bind( 'mousewheel DOMMouseScroll', function ( e ) {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
        var wh = $(window).height(); 
        var scroll = this.scrollTop + ( delta < 0 ? 1 : -1 ) * wh;
        scroll = Math.round(scroll/wh) * wh;
        $dom.stop().animate({ scrollTop: scroll }, 800);
        console.log(scroll);
        e.preventDefault();
    });

    $(document).keydown(function(e) {
        // up
        if (e.which == 38 || e.which == 33) {
            var wh = $(window).height(); 
            var scroll = $(window).scrollTop() - wh;
            console.log(scroll);
            scroll = Math.round(scroll/wh) * wh;
            $dom.stop().animate({ scrollTop: scroll }, 800);
            e.preventDefault();
        }
        // down
        if (e.which == 34 || e.which == 40) {
            var wh = $(window).height(); 
            var scroll = $(window).scrollTop() + wh;
            scroll = Math.round(scroll/wh) * wh;
            $dom.stop().animate({ scrollTop: scroll }, 800);
            e.preventDefault();
        }        
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