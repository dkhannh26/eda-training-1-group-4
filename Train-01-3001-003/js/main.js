$(document).ready(function () {
    // setting slide
    currentSlide = "003";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function (swipedir) {
        if (swipedir == 'left') {
            window.goToSlide("004");
        }
        if (swipedir == 'right') {
            window.goToSlide("002");
        }
    });

    // animation here
    setTimeout(() => {
        $(".line").addClass('show');
    }, 500);

    setTimeout(() => {
        $(".bg-txt").addClass('show');
    }, 1000);
});

const firstDrop = document.querySelector('.first-drop');
const secondDrop = document.querySelector('.second-drop');
const firstDropDown = document.querySelector('.first-dropdown-txt');
const secondDropDown = document.querySelector('.second-dropdown-txt');
const firstBg = document.querySelector('.fisrt-bg-txt')
const firstIicon = document.querySelector('.first-info');
const secondBg = document.querySelector('.second-bg-txt')
const secondIicon = document.querySelector('.second-info');
let isShow = false
firstDrop.addEventListener("touchend",
    function changeBG() {
        if(!isShow) {
            console.log('click')
            firstBg.style.background = 'url(../../Train-01-3001-003/images/dropdown-txt-img.png) no-repeat'
            firstDropDown.style.display = 'flex'
            firstIicon.innerHTML = 'X';
            firstIicon.style.right = '3.1vw';
            isShow = true
        } else {
            firstBg.style.background = 'url(../../Train-01-3001-003/images/txt-img.png) no-repeat'
            firstDropDown.style.display = 'none'
            firstIicon.innerHTML = 'i';
            firstIicon.style.right = '3.5vw';
            isShow = false

        }
        
    }
)

secondDrop.addEventListener("touchend",
function changeBG() {
    if(!isShow) {
        console.log('click')
        secondBg.style.background= 'url(../../Train-01-3001-003/images/dropdown-txt-img.png) no-repeat'
        secondDropDown.style.display = 'flex'
        secondIicon.innerHTML = 'X';
        secondIicon.style.right = '3.1vw';
        isShow = true
    } else {
        secondBg.style.background= 'url(../../Train-01-3001-003/images/txt-img.png) no-repeat'
        secondDropDown.style.display = 'none'
        secondIicon.innerHTML = 'i';
        secondIicon.style.right = '3.5vw';
        isShow = false

    }
    
})

