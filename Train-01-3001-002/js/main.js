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

    const progressList = document.querySelectorAll('.chart-column progress')
    const firstCol = document.querySelector('.col-first')
    const secondCol = document.querySelector('.col-second')

    // animation here
    setTimeout(() => { 
        $(".line").addClass('show');
        firstCol.value = 43
        secondCol.value = 24
    },500);

    progressList.forEach(progress => {
        // animation here
        setTimeout(() => { 
            progress.style.height = '500px';
        }, 500);
    });

});


