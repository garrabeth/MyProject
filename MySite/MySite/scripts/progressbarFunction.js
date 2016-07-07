$(document).ready(function () {
$(window).bind('scroll', function() { 
    if ($(this).scrollTop() >= $('#content').position().top - 300) {
        fireProgressBar();
        fireProgressBar = true;
    }
    return false;
});

});

function fireProgressBar() {

    var mq = window.matchMedia("(max-width: 375px)");

    var java = new ProgressBar.Circle('#java', {
        color: 'rgb(111, 201, 147)',
        strokeWidth: 6,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#fe6666', width: 2 },
        to: { color: '#fe6666', width: 6 },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "%");
            }
        }
    });

    java.text.style.fontFamily = '"Arial"';
    java.text.style.color = 'rgba(0,0,0,0.8)';
    java.text.style.fontWeight = '800';
    java.animate(0.75);


    var dotnet = new ProgressBar.Circle('#dotnet', {
        color: 'rgb(111, 201, 147)',
        strokeWidth: 6,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#c254fb', width: 2 },
        to: { color: '#c254fb', width: 8 },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "%");
            }
        }
    });

    dotnet.text.style.fontFamily = '"Arial"';
    dotnet.text.style.color = 'rgba(0,0,0,0.8)';
    dotnet.text.style.fontWeight = '800';
    dotnet.animate(0.50);

    var javascript = new ProgressBar.Circle('#javascript', {
        color: 'rgb(111, 201, 147)',
        strokeWidth: 6,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#c9cf29', width: 2 },
        to: { color: '#c9cf29', width: 6 },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "%");
            }
        }
    });

    javascript.text.style.fontFamily = '"Arial"';
    javascript.text.style.color = 'rgba(0,0,0,0.8)';
    javascript.text.style.fontWeight = '800';
    javascript.animate(0.80);

    var htmlcss = new ProgressBar.Circle('#html-css', {
        color: 'rgb(111, 201, 147)',
        strokeWidth: 6,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#ef981c', width: 2 },
        to: { color: '#ef981c', width: 6 },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "%");
            }
        }
    });

    htmlcss.text.style.fontFamily = '"Arial"';
    htmlcss.text.style.color = 'rgba(0,0,0,0.8)';
    htmlcss.text.style.fontWeight = '800';
    htmlcss.animate(0.70);

    var sql = new ProgressBar.Circle('#sql', {
        color: 'rgb(111, 201, 147)',
        strokeWidth: 6,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#5255354', width: 2 },
        to: { color: '#5255354', width: 6 },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "%");
            }
        }
    });

    sql.text.style.fontFamily = '"Arial"';
    sql.text.style.color = 'rgba(0,0,0,0.8)';
    sql.text.style.fontWeight = '800';
    sql.animate(0.70);

    var photoshop = new ProgressBar.Circle('#photoshop', {
        color: 'rgb(111, 201, 147)',
        strokeWidth: 6,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#2c68ac', width: 2 },
        to: { color: '#2c68ac', width: 6 },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "%");
            }
        }
    });

    photoshop.text.style.fontFamily = '"Arial"';
    photoshop.text.style.color = 'rgba(0,0,0,0.8)';
    photoshop.text.style.fontWeight = '800';
    photoshop.animate(0.70);

    var illustrator = new ProgressBar.Circle('#illustrator', {
        color: 'rgb(111, 201, 147)',
        strokeWidth: 6,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#ab7b27', width: 2 },
        to: { color: '#ab7b27', width: 6 },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "%");
            }
        }
    });

    illustrator.text.style.fontFamily = '"Arial"';
    illustrator.text.style.color = 'rgba(0,0,0,0.8)';
    illustrator.text.style.fontWeight = '800';
    illustrator.animate(0.70);

    var css = new ProgressBar.Circle('#css', {
        color: 'rgb(111, 201, 147)',
        strokeWidth: 6,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#40a1ce', width: 2 },
        to: { color: '#40a1ce', width: 6 },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "%");
            }
        }
    });

    css.text.style.fontFamily = '"Arial"';
    css.text.style.color = 'rgba(0,0,0,0.8)';
    css.text.style.fontWeight = '800';
    css.animate(0.70);
}