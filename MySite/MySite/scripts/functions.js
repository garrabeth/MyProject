$(document).ready(function() {
    
    $('section[data-type="background"]').each(function() {
        var $backObj = $(this);

        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $backObj.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $backObj.css({ backgroundPosition: coords });
            document.createElement("article");
            document.createElement("section");
            document.createElement("div");

        });
    });

        var $root = $('html, body');

        $('.navTo').click(function (e) {
            $root.animate({
                scrollTop: $($.attr(this, 'href')).offset().top-70
            }, 600);
            e.preventDefault();
        });

    /*Länkar till sociala medier*/
        $('#lnButton').click(function () {
            window.open("https://www.linkedin.com/in/gabriel-bashe-986406a9?trk=nav_responsive_tab_profile");
        });

        $('#fbButton').click(function () {
            window.open("https://www.facebook.com/garrabeth");
        });
});        











