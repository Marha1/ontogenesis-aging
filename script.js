document.addEventListener('DOMContentLoaded', function() {
    // Параллакс-эффект для героя
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }

    // Анимация появления элементов при скролле
    function animateElements() {
        const cards = document.querySelectorAll('.card, .recommendation-card, .fact-card');
        const windowHeight = window.innerHeight;
        
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            if (cardPosition < windowHeight * 0.75) {
                card.classList.add('visible');
            }
        });
    }

    // Запуск анимации при загрузке и скролле
    animateElements();
    window.addEventListener('scroll', animateElements);

    // Эффект нажатия для кнопки
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(2px)';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
        
        ctaButton.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 6px 8px rgba(0,0,0,0.15)';
        });
    }

    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Анимация иконок при наведении
    const animatedIcons = document.querySelectorAll('.card-icon, .recommendation-icon i, .fact-badge i');
    animatedIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
        });
    });
});