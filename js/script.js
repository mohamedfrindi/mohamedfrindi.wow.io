
// loding page --------------------------
$(document).ready(function () {
    $('.loding').hide();
/*
    $(window).on('load',function () {
        $('.loding').show();
    })
*/
});
/*------------X-------------X-----------*/



// bars icone hover  ---------------------
$(document).ready(function () {
    $('.bars-icone').hover(function () {
            // over
            $('.bars-icone span').animate({
                width : '100' + '%'
            },500);
        }, function () {
            // out
            $('.bar-lin.lin-1').animate({
                width : '40%' 
            },500);
            $('.bar-lin.lin-2').animate({
                width : '70%' 
            },500);
            $('.bar-lin.lin-3').animate({
                width : '100%' 
            },500);
        }
    );
});
/*------------X------------X-------------*/

// bars click show and hide ----------------
$(document).ready(function () {
    $('.bars-icone').on('click',function () {
        $('.bars-content').animate({
            top : '0'
        },1000);
    });
    $('.bars-icone-cancel').on('click',function () {
        $('.bars-content').animate({
            top : '-100' + '%'
        },700);
    });
});
/*--------------X------------X-------------*/



// btn cancel barrs hover ------------------
$(document).ready(function () {
    $('.bars-icone-cancel').hover(function () {
            // over
            $(this).css({
                transform: 'rotate(90deg)',
            });
    });
});
/*-----------X-------------X--------------*/



// skin colors --------------------------------
$(document).ready(function () {

    // click open and close
    $('.skin-btn').on('click',function () {

        $(this).animate({
            left : '-100'
        },1000);

        $('.skin-content').animate({
            left : '0'
        },700);

    });

    $('.skin-btn-close').on('click',function () {

        $('.skin-btn').animate({
            left : '0%'
        },1000);

        $('.skin-content').animate({
            left : '-100%'
        },700);

    });

    // colors 
    $('.skin-content ul li').on('click',function () {
        $('body').attr('data-main-color' , $(this).attr('data-color'));
    });


});
/*----------X----------------X------------------*/


// add class skin -----------------------
$(document).ready(function () {
    
    $('.home-info span').addClass('skin-color');
    $('.btn').addClass('skin-background');
    $('.trs').addClass('skin-background');
    $('.section-title h3 span , .section-title-sm h3 span').addClass('skin-color');
    $('.about-item-title span , .about-item-info span, .service-item-title').addClass('skin-color');
    $('.home-social ul li a i').addClass('skin-background');
    $('.service-item-overlay').addClass('skin-background');
    $('.bars-icone').addClass('skin-background');
    $('.blog-date').addClass('skin-background');
    $('.section-title-sm h3').addClass('skin-after , skin-before');
    $('.service-item-overlay').addClass('skin-hover');
    $('.btn').addClass('skin-hover');
    $('.prt-nav button').addClass('skin-border , skin-background');

});
/*-----------X--------------X-------------*/



// social section ---------------------
$(document).ready(function () {
    // animate icone cansel
    function animateSocialIconeCancel() {
        $('.social-cansel').animate({
            fontSize : '+=3' + 'px'
        },700,function () {
            $('.social-cansel').animate({
                fontSize : '-=3' + 'px'
            },700 , animateSocialIconeCancel);
        });
    }
    animateSocialIconeCancel();

    // show icone cansel social
    $('.home-social ul').hover(function () {
            // over
            $('.social-cansel').animate({
                right : '55px',
                opacity : '1'
            },500);
        }, function () {
            // out
            $('.social-cansel').animate({
                right : '30px',
                opacity : '0'
            },500);
        }
    );


    // click icone cansel social
    $('.social-cansel').on('click',function () {
        $('.home-social').animate({
            right : '-100%'
        },1000);
    });


});
/*----------X-------------X------------*/




// transision efect and hide bars content-----------------
$(document).ready(function () {

    // transition -----------------------------
            // part 1 : efect -------
            $('.bars-content-list ul li , .btn-about a').on('click',function (e) {

                $('.trs-cont').show();

                    $('.trs').show().animate({
                        left : '200%'
                    },1000,function () {
                    $('.trs').hide().animate({
                        left : '-130%'
                    },5);

                    $('.trs-cont').slideToggle();

                    });
            });

            // part 2 : automatic click for btn concel
            $.each( $('.bars-content-list ul li'), function () { 
                $(this).on('click',function () {
                $('.bars-icone-cancel').click();
                });
            });


});
/*---------X------------X----------*/



// magicMouse -------------------------
    options = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "pointer-blur",
    "hoverItemMove": true,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
    }; 
    magicMouse(options);


/*-----------X--------------X------------*/




// about skils -------------------------------
$(document).ready(function () {

    // part 1 : add with span
    $('.skl').each(function () {
        $(this).css({
            width : $(this).data('width')
        });
    });
    // part 2 : add number skils % 
    $('.skl').each(function () {
            $(this).text( $(this).data('width') );
    });

});
/*----------------X---------------X---------------*/




// portfolio ----------------------------
$(document).ready(function () {

    // add class active
    $('.prt-nav button').on('click',function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // prtfolio func
    $('.prt-nav button').on('click',function () {

        var prtAttr = $(this).data('filter');

        if (prtAttr == 'all') {
            $('.prt-item').show('500');
        }
        else{
            $('.prt-item').not('.' + prtAttr).hide('500');
            $('.prt-item').filter('.' + prtAttr).show('500');
        }

    });


});
/*--------------X--------------X---------------*/




// typer js --------------------------------
var typed = new Typed('.typed', {
	strings: ['FRINDI', 'DISINGER' , 'DEVLOPMENT' , 'FREELANCER'],
	typeSpeed: 70,
	backSpeed: 20,
	loop : true,
	backDelay: 1000,
	fadeOut: false,
	fadeOutDelay: 500,
	showCursor: true,
	cursorChar: '|',
	shuffle: false,
});
/*------------X---------------X--------------*/




// img previe -------------------------
$(document).ready(function () {

    // part 1 : item prev
    $('.img-previe i').on('click',function () {
        $('.img-previe').hide('500');
    });

    // part 2 : add img for item 
    $('.portfolio img').each(function () {
        $(this).on('click',function () {

            $('.img-previe').show('500');
            $('.img-previe img').attr( 'src' , $(this).attr('src') );

        });
    });
});
/*-------------X------------X-----------*/



