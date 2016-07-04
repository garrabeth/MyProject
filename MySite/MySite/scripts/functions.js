$(document).ready(function() {
    
    //------------Navigation between tabs with dimensions----------------//

    $('section[data-type="background"]').each(function() {
        var $backObj = $(this);

        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $backObj.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $backObj.css({ backgroundPosition: coords });
            document.createElement("article");
            document.createElement("div");
            document.createElement("section");

        });
    });

        var $root = $('html, body');

        $('.navTo').click(function (e) {
            $root.animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 88
            }, 600);
            e.preventDefault();
        });

    //------------Navigation between tabs with dimensions----------------//

    //-----------------------Navbar-closes onClick---------------------------//

        $(document).on('click.nav', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a')) {
                $(this).removeClass('in').addClass('collapse');
            }
        });

    //-----------------------Navbar-closes onClick---------------------------//


    //------------------Opacity for video tag when scroll-------------------------//        

        var target = $('.video-fade');
        var targetHeight = target.innerHeight();

        $(window).scroll('scroll', function fade() {
            var scrollPercent = 0;
            scrollPercent = (targetHeight + window.scrollY) / targetHeight;
            target.css('opacity', scrollPercent - 0.2);
            console.log(scrollPercent);

            return fade;          
        });

    //------------------Opacity for video tag when scroll-------------------------//


    //------------------Opacity for navigation bar when scroll-------------------------//   

        var $navTarget = $('#navigationBar');
        $(window).scroll(function () {
            $navTarget.css({ background: $(this).scrollTop() < 200 ? "transparent" : "#fff" });
            
        });

    //------------------Opacity for navigation bar when scroll-------------------------// 

       

    //---------------------Länkar till sociala medier-----------------------------------//

        $('#lnButton').click(function () {
            window.open("https://www.linkedin.com/in/gabriel-bashe-986406a9?trk=nav_responsive_tab_profile");
        });

        $('#fbButton').click(function () {
            window.open("https://www.facebook.com/garrabeth");
        });

    //---------------------------End of länkar------------------------------------------//


}); // Endtag for DocumentReadyFunction       











