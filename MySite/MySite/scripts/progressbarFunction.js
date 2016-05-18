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
        to: { color: 'rgb(36, 51, 42)', width: 6 },

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
    bar1.text.style.fontSize = '100px';
    bar1.text.style.color = '#fff';
    bar1.animate(0.75);
};