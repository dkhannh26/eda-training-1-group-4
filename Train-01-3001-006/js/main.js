$(document).ready(function () {
    // setting slide
    currentSlide = "006";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function (swipedir) {
        if (swipedir == 'left') {
            disableSwipe = true;
        }
        if (swipedir == 'right') {
            window.goToSlide("005");
        }
    });

    $(".slide1").on("touchend click", function () {
        window.goToSlide("001");
    });

    $(".slide2").on("touchend click", function () {
        window.goToSlide("002");
    });

    $(".slide3").on("touchend click", function () {
        window.goToSlide("003");
    });

    $(".slide4").on("touchend click", function () {
        window.goToSlide("004");
    });

    $(".slide5").on("touchend click", function () {
        window.goToSlide("005");
    });

    // animation here
    setTimeout(() => {
        $(".bg-map").addClass('show');
    }, 500);

    setTimeout(() => {
        $(".img-map").addClass('show');
    }, 1000);
});
