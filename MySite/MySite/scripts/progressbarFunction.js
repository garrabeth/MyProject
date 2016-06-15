window.onload = function onLoad() {

    var bar1 = new ProgressBar.Circle('#bar1', {
        color: 'rgb(111, 201, 147)',
        strokeWidth: 6,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: 'rgb(111, 201, 147)', width: 2 },
        to: { color: 'rgb(182, 57, 57)', width: 6 },

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

    bar1.text.style.fontFamily = '"Century Gothic"';
    bar1.text.style.fontSize = '30px';
    bar1.text.style.color = '#fff';
    bar1.animate(0.75);


    var bar2 = new ProgressBar.Circle('#bar2', {
        color: 'rgb(111, 201, 147)',
        strokeWidth: 6,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: 'rgb(111, 201, 147)', width: 2 },
        to: { color: 'rgb(57, 182, 125)', width: 8 },

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

    bar2.text.style.fontFamily = '"Century Gothic"';
    bar2.text.style.fontSize = '30px';
    bar2.text.style.color = '#fff';
    bar2.animate(0.50);

    var bar3 = new ProgressBar.Circle('#bar3', {
        color: 'rgb(111, 201, 147)',
        strokeWidth: 6,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: 'rgb(111, 201, 147)', width: 2 },
        to: { color: 'rgb(213, 105, 42)', width: 6 },

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

    bar3.text.style.fontFamily = '"Century Gothic"';
    bar3.text.style.fontSize = '30px';
    bar3.text.style.color = '#fff';
    bar3.animate(0.80);

    var bar4 = new ProgressBar.Circle('#bar4', {
        color: 'rgb(111, 201, 147)',
        strokeWidth: 6,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: 'rgb(111, 201, 147)', width: 2 },
        to: { color: 'rgb(61, 112, 168)', width: 6 },

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

    bar4.text.style.fontFamily = '"Century Gothic"';
    bar4.text.style.fontSize = '30px';
    bar4.text.style.color = '#fff';
    bar4.animate(0.70);
};