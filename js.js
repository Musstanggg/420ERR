function rc() {
    var length = 6;
    var chars = '0123456789ABCDEF';
    var hex = '#';
    while (length--) hex += chars[(Math.random() * 15) | 0];
    return hex;
}

function rs() {
    return Math.random().toString(3).substring(4, 8) + "px";
}

$(document).ready(function () {
    setInterval(function () {

        $('.boxa').css({
            background: rc(),
            borderColor: rc(),
            width: rs(),
            height: rs()
        });

      

        $('.boxb').css({
            background: rc(),
            borderColor: rc(),
            width: rs(),
            height: rs()
        });

        $('.boxc').css({
            background: rc(),
            borderColor: rc(),
            width: rs(),
            height: rs()
        });

        $('body').css({
            background: rc()
        });

        $('.boxa h1').css({
            color: rc(),
            fontSize: rs()
        });

        $('.boxa p').css({
            color: rc()
        });

    }, 60);
});