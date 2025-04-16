// controle de rolagem - article rolagem de roupas

document.addEventListener('DOMContentLoaded', function(){
    const container = new document.querySelector('.cards-container');
    const leftArrow = new document.querySelector('.left-arrow');
    const rightArrow = new document.querySelector('.right-arrow');

    function checkScroll() {
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidht - container.clientWidth;

        leftArrow.classList.toggle('hidden', scrollLeft === 0);
        rightArrow.classList.toggle('hidden', scrollLeft >= maxScroll - 5);
    }
    leftArrow.addEventListener('click', () => {
        container.scrollBy({ left: -300, behavior: 'smooth' });
    });


});