$(document).ready(function(){

    // browser detection
    var matched, browser;

    jQuery.uaMatch = function( ua ) {
        ua = ua.toLowerCase();

        var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];

        return {
            browser: match[ 1 ] || "",
            version: match[ 2 ] || "0"
        };
    };

    matched = jQuery.uaMatch( navigator.userAgent );
    browser = {};

    if ( matched.browser ) {
        browser[ matched.browser ] = true;
        browser.version = matched.version;
    }

    // Chrome is Webkit, but Webkit is also Safari.
    if ( browser.chrome ) {
        browser.webkit = true;
    } else if ( browser.webkit ) {
        browser.safari = true;
    }

    jQuery.browser = browser;

 
    if ($.browser.mozilla) {
        var $dom = $('html'); 
    } else {
        var $dom = $('body');
    }
    var $frame = $("iframe");
    var scroll = this.scrollTop;      

   
    $dom.bind( 'mousewheel DOMMouseScroll', function ( e ) {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
        var wh = $(window).height(); 
        var scroll = this.scrollTop + ( delta < 0 ? 1 : -1 ) * wh;
        scroll = Math.round(scroll/wh) * wh;
        $dom.stop().animate({ scrollTop: scroll }, 800, function() {
            if (wh + this.scrollTop == $(document).height()) {
                $(".navigator").hide();
            } else {
                $(".navigator").show();
            } 
        });
        e.preventDefault();
    });

    $(document).keydown(function(e) {
        // up
        if (e.which == 38 || e.which == 33) {
            var wh = $(window).height(); 
            var scroll = $(window).scrollTop() - wh;
            scroll = Math.round(scroll/wh) * wh;
            $dom.stop().animate({ scrollTop: scroll }, 800, function() {
                if (wh + this.scrollTop == $(document).height()) {
                    $(".navigator").hide();
                } else {
                    $(".navigator").show();
                } 
            });
            e.preventDefault();
        }
        // down
        if (e.which == 34 || e.which == 40) {
            var wh = $(window).height(); 
            var scroll = $(window).scrollTop() + wh;
            scroll = Math.round(scroll/wh) * wh;
            $dom.stop().animate({ scrollTop: scroll }, 800, function() {
                if (wh + this.scrollTop == $(document).height()) {
                    $(".navigator").hide();
                } else {
                    $(".navigator").show();
                } 
            });
            e.preventDefault();
        }        
    });
    $(".navigator").bind( 'click', function ( e ) {
        var wh = $(window).height(); 
        var scroll = $(window).scrollTop() + wh;
        scroll = Math.round(scroll/wh) * wh;
            $dom.stop().animate({ scrollTop: scroll }, 800, function() {

                if (wh + $(window).scrollTop() == $(document).height()) {
                    $(".navigator").hide();
                } else {
                    $(".navigator").show();
                } 
        });
    });
    

});

