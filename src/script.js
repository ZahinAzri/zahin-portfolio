document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const preloader = document.getElementById('preloader');
    const preloaderLogoPaths = document.querySelectorAll('.preloader-logo path');
    
    const tl = gsap.timeline();

    window.onload = () => {
        tl.to(preloaderLogoPaths, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut",
            stagger: 0.3
        }).to(preloader, {
            duration: 0.5,
            opacity: 0,
            delay: 0.5,
            onComplete: () => {
                preloader.style.display = 'none';
                mainContent.classList.remove('content-hidden');
                mainContent.style.opacity = 1;
                
                const scroll = new LocomotiveScroll({
                    el: document.querySelector('[data-scroll-container]'),
                    smooth: true,
                    tablet: { smooth: true },
                    smartphone: { smooth: true }
                });

                new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"));

                // --- Mobile Menu ---
                const menuBtn = document.getElementById('menu-btn');
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu.addEventListener('click', (e) => e.stopPropagation());
                menuBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    mobileMenu.classList.toggle('hidden');
                });
                document.addEventListener('click', () => mobileMenu.classList.add('hidden'));

                // --- Navigation Highlighting ---
                const navLinks = document.querySelectorAll('.nav-link');
                const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
                
                scroll.on('scroll', (args) => {
                    const sections = document.querySelectorAll('[data-scroll-section]');
                    let currentSectionId = '';

                    sections.forEach(section => {
                        const rect = section.getBoundingClientRect();
                        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                            currentSectionId = section.id;
                        }
                    });

                    const updateLinks = (links) => {
                        links.forEach(link => {
                            const targetId = link.getAttribute('data-scroll-to').substring(1);
                            link.classList.toggle(link.classList.contains('mobile-nav-link') ? 'mobile-nav-active' : 'nav-active', targetId === currentSectionId);
                        });
                    };
                    
                    updateLinks(navLinks);
                    updateLinks(mobileNavLinks);
                });

                // --- Scroll-To Links ---
                const scrollToLinks = document.querySelectorAll('[data-scroll-to]');
                scrollToLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const target = link.getAttribute('data-scroll-to');
                        scroll.scrollTo(target);
                        mobileMenu.classList.add('hidden');
                    });
                });

                // --- Flashlight Effect ---
                const flashlightElements = document.querySelectorAll('.flashlight-wrapper');
                flashlightElements.forEach(wrapper => {
                    const text = wrapper.querySelector('.flashlight');
                    if (text) {
                        wrapper.addEventListener('mousemove', e => {
                            const rect = wrapper.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            text.style.setProperty('--x', `${(x / rect.width) * 100}%`);
                            text.style.setProperty('--y', `${(y / rect.height) * 100}%`);
                        });
                        wrapper.addEventListener('mouseenter', () => text.style.setProperty('--light-opacity', '1'));
                        wrapper.addEventListener('mouseleave', () => text.style.setProperty('--light-opacity', '0.1'));
                    }
                });
            } 
        });
    };
     // --- Custom Cursor for Project Cards ---
    const clickMeCursor = document.getElementById('click-me-cursor');
    const projectCards = document.querySelectorAll('.project-card');

    if (window.matchMedia("(pointer: fine)").matches) {
        if(clickMeCursor) {
            let mouseX = 0, mouseY = 0;
            
            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            gsap.ticker.add(() => {
                gsap.to(clickMeCursor, {
                    duration: 0.6,
                    x: mouseX - (clickMeCursor.offsetWidth / 2),
                    y: mouseY - (clickMeCursor.offsetHeight / 2),
                    ease: "power3.out",
                });
            });

            projectCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(clickMeCursor, { duration: 0.3, opacity: 1, scale: 1 });
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(clickMeCursor, { duration: 0.3, opacity: 0, scale: 0 });
                });
            });
        }
    }
});
