$(document).ready(function () {

    $(function () {
        $("#computer-plants, #plant1, #plant2, #plant3, #plant4, #p2,.pop-up").draggable();
    });

    $('#p1').click(function () {
        $('.pop-up').toggle();
    });

    $("#computer2").click(function () {
        //        $("#plant4").hide();
        $("#plant4").toggle();
    });

    $('#computer1').hover(function () {
        $('#p2').fadeIn();
    }, function () {
        $('#p2').fadeOut();
    });

    $('#computer2').hover(function () {
        $('#p3').fadeIn();
    }, function () {
        $('#p3').fadeOut();
    });

    $('#computer3').hover(function () {
        $('#p4').fadeIn();
    }, function () {
        $('#p4').fadeOut();
    });

    var bgImg = [
       'url(asset/bg-4.jpg)',
       'url(asset/bg-2.jpg)',
       'url(asset/bg-1.jpg)',
       'url(asset/bg-3.jpg)',
       'url(asset/bg-5.jpg)'
    ];

    var counter = 0;

    $('#garden-option').click(function () {
        if (counter == bgImg.length) {
            counter = 0;
        }
        var currentBg = bgImg[counter];
        $('body').css("background-image", currentBg);
        counter++;
    });
});
