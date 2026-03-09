/* ============================================
   医化学創薬株式会社 - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    initHamburgerMenu();
    initHeroSlider();
});

/* Hamburger Menu */
function initHamburgerMenu() {
    var hamburger = document.querySelector('.header__hamburger');
    var mobileNav = document.getElementById('mobileNav');
    if (!hamburger || !mobileNav) return;
    var overlay = mobileNav.querySelector('.mobile-nav__overlay');

    function toggleMenu() {
        var isActive = mobileNav.classList.toggle('mobile-nav--active');
        hamburger.classList.toggle('header__hamburger--active');
        hamburger.setAttribute('aria-label', isActive ? 'メニューを閉じる' : 'メニューを開く');
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleMenu);
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }
}

/* Hero Slider */
function initHeroSlider() {
    var dots = document.querySelectorAll('.hero__dot');
    if (dots.length === 0) return;

    var currentIndex = 0;

    for (var i = 0; i < dots.length; i++) {
        (function (index) {
            dots[index].addEventListener('click', function () {
                dots[currentIndex].classList.remove('hero__dot--active');
                currentIndex = index;
                dots[currentIndex].classList.add('hero__dot--active');
            });
        })(i);
    }

    setInterval(function () {
        dots[currentIndex].classList.remove('hero__dot--active');
        currentIndex = (currentIndex + 1) % dots.length;
        dots[currentIndex].classList.add('hero__dot--active');
    }, 5000);
}
