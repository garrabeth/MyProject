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
                scrollTop: $($.attr(this, 'href')).offset().top-80
            }, 600);
            e.preventDefault();
        });
});        











