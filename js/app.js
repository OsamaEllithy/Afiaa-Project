window.addEventListener('DOMContentLoaded', () => {
    const bannerText = document.querySelector('.banner-text');

    setTimeout(() => {
    bannerText.classList.add('animate');
    }, 300);
});


    const cards = document.querySelectorAll('.card');

    const showCardsOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.9;

        cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            setTimeout(() => {
            card.classList.add('show');
            }, (index % 3) * 150);
        }
        });
    };

    window.addEventListener('scroll', showCardsOnScroll);
    window.addEventListener('load', showCardsOnScroll);