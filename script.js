const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

// On slideLeft, start with the last slide in view.
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Show next slides if up button is clicked, or previous slides if down button is clicked.
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

// Moves either the next slides into view if 'up' is specified, or the previous slides if 'down' is specified.
const changeSlide = (direction) => {
    // Get the current height of sliderContainer.
    const sliderHeight = sliderContainer.clientHeight;

    // If 'up', show next slides.
    if (direction === 'up') {
        activeSlideIndex++;

        // If the last slide is passed, start from beginning.
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } 
    // Else if 'down', show previous slides.
    else if (direction === 'down') {
        activeSlideIndex--;

        // If the first slide is passed, start from end.
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    // Translate the right slides up so active slide is in view.
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;

    // Translate the left slides down so active slide is in view.
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}