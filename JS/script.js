// controle de rolagem - article rolagem de roupas

document.addEventListener('DOMContentLoaded', function(){
    const container =  document.querySelector('.cards-container');
    const leftArrow =  document.querySelector('.left-arrow');
    const rightArrow =  document.querySelector('.right-arrow');

    function checkScroll() {
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;

        
        rightArrow.classList.toggle('hidden', scrollLeft >= maxScroll - 5);
    }
    leftArrow.addEventListener('click', () => {
        container.scrollBy({ left: -300, behavior: 'smooth' });
    });
    rightArrow.addEventListener('click', () => {
        container.scrollBy({ left: 300, behavior: 'smooth' });
    });
    container.addEventListener('scroll', checkScroll);
    checkScroll();

});