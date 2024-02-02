$(document).ready(function () {
    // setting slide
    currentSlide = "001";
    localStorage.setItem('current-slide', currentSlide);
	disableSwipe = false;

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function(swipedir){
        if (swipedir == 'left') {
            window.goToSlide("002");
        }
        if (swipedir == 'right') {
            disableSwipe = true;
        }
    });

    // animation here
    setTimeout(() => { 
        $(".line").addClass('show');
        $("#main-container").addClass('show');
    },500);
});
