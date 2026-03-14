/* ============================================
   医化学創薬株式会社 - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    initHamburgerMenu();
    initHeroSlider();
    initMobileStickyBar();
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

/* Mobile Sticky Bar */
function initMobileStickyBar() {
    var bar = document.getElementById('mobileStickyBar');
    var bottomBar = document.getElementById('mobileBottomBar');
    if (!bar && !bottomBar) return;

    var header = document.querySelector('.header');
    var lastScrollY = window.scrollY;
    var ticking = false;

    function updatePosition() {
        if (bar) {
            bar.style.top = header.offsetHeight + 'px';
        }
    }

    function onScroll() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function () {
            var currentScrollY = window.scrollY;
            if (currentScrollY - lastScrollY > 5 && currentScrollY > header.offsetHeight) {
                if (bar) bar.classList.add('mobile-sticky-bar--hidden');
                if (bottomBar) bottomBar.classList.add('mobile-bottom-bar--hidden');
            } else if (lastScrollY - currentScrollY > 5) {
                if (bar) bar.classList.remove('mobile-sticky-bar--hidden');
                if (bottomBar) bottomBar.classList.remove('mobile-bottom-bar--hidden');
            }
            lastScrollY = currentScrollY;
            ticking = false;
        });
    }

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', onScroll, { passive: true });
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
