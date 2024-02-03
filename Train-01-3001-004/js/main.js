$(document).ready(function () {
    // setting slide
    currentSlide = "001";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function (swipedir) {
        if (swipedir == 'left') {
            window.goToSlide("005");
        }
        if (swipedir == 'right') {
            window.goToSlide("003");
        }
    });

    // animation here
    setTimeout(() => {
        $(".line").addClass('show');
    }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
    const chartCols = document.querySelectorAll('.chart-wrapper__bar-col');

    // Animation for bar chart

    const elementToAnimate = document.querySelectorAll('div[class*="chart-wrapper__bar-col--"]');

    // Bar chart
    const data = [
        { left: 70, right: 38 },
        { left: 50, right: 62 },
        { left: 54, right: 34 },
        { left: 42, right: 48 },
        { left: 68, right: 43 }
    ];

    chartCols.forEach((chartCol, index) => {
        const leftColumn = chartCol.querySelector('.chart-wrapper__bar-col--left');
        const rightColumn = chartCol.querySelector('.chart-wrapper__bar-col--right');

        const leftText = document.createElement('span');
        leftText.className = "chart-wrapper__bar-col-percent normal-txt";

        const rightText = document.createElement('span');
        rightText.className = "chart-wrapper__bar-col-percent normal-txt";

        const { left, right } = data[index];

        leftColumn.style.height = left / 80 * 100 + "%";
        leftText.textContent = left + "%";
        leftColumn.appendChild(leftText);

        rightColumn.style.height = right / 80 * 100 + "%";;
        rightText.textContent = right + "%";
        rightColumn.appendChild(rightText);
    });
});