$(document).ready(function () {
    // setting slide
    currentSlide = "002";
    localStorage.setItem('current-slide', currentSlide);
	disableSwipe = false;

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function(swipedir){
        if (swipedir == 'left') {
            window.goToSlide("003");
        }
        if (swipedir == 'right') {
            window.goToSlide("001");
        }
    });

    // animation here
    setTimeout(() => { 
        $(".line").addClass('show');
    },500);

    const progressList = document.querySelectorAll('progress')

    progressList.forEach(progress => {
        // animation here
        setTimeout(() => { 
            progress.style.height = '500px';
        }, 500);
    });
});


