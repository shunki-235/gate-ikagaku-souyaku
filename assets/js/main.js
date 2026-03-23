/* ============================================
   医化学創薬株式会社 - Main JavaScript
   ============================================ */

function updateMobileStickyBarPosition() {
    var bar = document.getElementById('mobileStickyBar');
    var header = document.querySelector('.header');
    if (bar && header) {
        bar.style.top = header.offsetHeight + 'px';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    initHamburgerMenu();
    initMobileSearchToggle();
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

        if (isActive) {
            var stickyBar = document.getElementById('mobileStickyBar');
            var searchToggle = document.getElementById('headerSearchToggle');
            if (stickyBar && stickyBar.classList.contains('mobile-sticky-bar--search-open')) {
                stickyBar.classList.remove('mobile-sticky-bar--search-open');
                if (searchToggle) {
                    searchToggle.setAttribute('aria-expanded', 'false');
                    searchToggle.setAttribute('aria-label', '検索を開く');
                }
                updateMobileStickyBarPosition();
            }
        }
    }

    hamburger.addEventListener('click', toggleMenu);
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }
}

/* Mobile search toggle (SP / tablet) */
function initMobileSearchToggle() {
    var toggle = document.getElementById('headerSearchToggle');
    var bar = document.getElementById('mobileStickyBar');
    var input = document.getElementById('mobileStickyBarSearchInput');
    var mobileNav = document.getElementById('mobileNav');
    var hamburger = document.querySelector('.header__hamburger');
    if (!toggle || !bar) return;

    function setOpen(isOpen) {
        if (isOpen) {
            bar.classList.remove('mobile-sticky-bar--hidden');
        }
        bar.classList.toggle('mobile-sticky-bar--search-open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        toggle.setAttribute('aria-label', isOpen ? '検索を閉じる' : '検索を開く');
        if (isOpen && input) {
            window.setTimeout(function () {
                input.focus();
            }, 0);
        }
        updateMobileStickyBarPosition();
        window.dispatchEvent(new Event('resize'));
    }

    toggle.addEventListener('click', function () {
        var willOpen = !bar.classList.contains('mobile-sticky-bar--search-open');
        if (willOpen && mobileNav && mobileNav.classList.contains('mobile-nav--active')) {
            mobileNav.classList.remove('mobile-nav--active');
            if (hamburger) {
                hamburger.classList.remove('header__hamburger--active');
                hamburger.setAttribute('aria-label', 'メニューを開く');
            }
            document.body.style.overflow = '';
        }
        setOpen(willOpen);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && bar.classList.contains('mobile-sticky-bar--search-open')) {
            setOpen(false);
        }
    });
}

/* Mobile Sticky Bar */
function initMobileStickyBar() {
    var bar = document.getElementById('mobileStickyBar');
    var bottomBar = document.getElementById('mobileBottomBar');
    if (!bar && !bottomBar) return;

    var lastScrollY = window.scrollY;
    var ticking = false;

    function onScroll() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function () {
            var header = document.querySelector('.header');
            var currentScrollY = window.scrollY;
            if (header && currentScrollY - lastScrollY > 5 && currentScrollY > header.offsetHeight) {
                if (bar && !bar.classList.contains('mobile-sticky-bar--search-open')) {
                    bar.classList.add('mobile-sticky-bar--hidden');
                }
                if (bottomBar) bottomBar.classList.add('mobile-bottom-bar--hidden');
            } else if (lastScrollY - currentScrollY > 5) {
                if (bar) bar.classList.remove('mobile-sticky-bar--hidden');
                if (bottomBar) bottomBar.classList.remove('mobile-bottom-bar--hidden');
            }
            lastScrollY = currentScrollY;
            ticking = false;
        });
    }

    updateMobileStickyBarPosition();
    window.addEventListener('resize', updateMobileStickyBarPosition);
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
