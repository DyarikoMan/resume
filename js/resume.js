
//function addLink() {
//	var body_element = document.getElementsByTagName('body')[0];
//	var selection;
//	selection = window.getSelection();
//	var pagelink = "<br /><br /> Read more at: <a href='"+document.location.href+"'>"+document.location.href+"</a><br />Copyright &copy; abderrahmaneD"; // change this if you want
//	var copytext = pagelink;
//	var newdiv = document.createElement('div');
//	newdiv.style.position='absolute';
//	newdiv.style.left='-99999px';
//	body_element.appendChild(newdiv);
//	newdiv.innerHTML = copytext;
//	selection.selectAllChildren(newdiv);
//	window.setTimeout(function() {
//		body_element.removeChild(newdiv);
//	},0);
//}
//document.oncopy = addLink;


(function ($) {
    "use strict"; // Start of use strict

    //$(".block-nnkfr").animate({ right: '-275px'});
    //  $(".zigzag-right").animate({ right: '-5'});
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sideNav'
    });

    var isRTL = false;
    $(".changeRTL").click(function () {
        if (!isRTL) {
            $(".container-fluid, .navbar-nav").fadeOut(250, function () {
                $("body").css("text-align", 'right');
                $("h1,h2,h3,h4,h5,h6").css("font-family", "Droid Arabic Kufi");
                $(".subheading").css("font-family", "Droid Arabic Kufi");
                $("Body").css("font-family", "Droid Arabic Kufi");
                $(".container-fluid").css("direction", "rtl");
            });
            animateSideBar(isRTL);
            $(".container-fluid, .navbar-nav").fadeIn(250);

        } else {
            $(".container-fluid, .navbar-nav").fadeOut(250, function () {
                $("body").css("text-align", 'left');
                $("h1,h2,h3,h4,h5,h6").css("font-family", "'Saira Extra Condensed', serif");
                $(".subheading").css("font-family", "'Saira Extra Condensed', serif");
                $("Body").css("font-family", "'Open Sans', serif");
                $(".container-fluid").css("direction", "ltr");
            });
            animateSideBar(isRTL);
            $(".container-fluid, .navbar-nav").fadeIn(250);
        }
        isRTL = !isRTL
    });

    var animateSideBar = function (isRTL) {
        if (!isRTL) {
            if ($(window).width() < 992) {
                $(".container-fluid").animate({ left: '0' });
                $(".block-kfr").css("direction", "rtl");
            } else {
                $(".block-kfr").animate({ left: '-275px' });
                $(".container-fluid").animate({ left: '-275px' });
                $(".zigzag-right").animate({ right: '263px' });
            }
            $(".block-nnkfr").animate({ right: '0' });

            $(".zigzag-left").animate({ left: '0' });
        } else {
            if ($(window).width() < 992) {
                $(".block-kfr").css("direction", "ltr");
                $(".navbar-brand, navbar-toggler, .navbar-collapse").fadeIn(250);
            }
            $(".block-kfr").animate({ left: '-0' });
            $(".container-fluid").animate({ left: '-0' });
            $(".block-nnkfr").animate({ right: '-275px' });
            $(".zigzag-right").animate({ right: '-5px' });
            $(".zigzag-left").animate({ left: '275px' });


        }
    }

})(jQuery); // End of use strict
