'use strict';

var ballActor = new ui.Actor({
    element: document.getElementById('ball'),
    values: {
        backgroundColor: '#ff2420',
        borderRadius: '50%'
    }
});

var morphAnimation = new ui.Tween({
    values: {
        backgroundColor: '#2983ff',
        borderRadius: '0%',
        x: 300
    },
    duration: 1000,
    yoyo: true
});

ballActor.start(morphAnimation);