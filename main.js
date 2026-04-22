/* ============================================================
   Jenny Cabrera — Edible Art Gallery
   main.js
   ============================================================ */

/**
 * Respeta la preferencia del usuario de reducir movimiento.
 * Si está activada, no se inicializan animaciones de scroll.
 */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


/* ── Smooth scroll para links internos ────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


/* ── Parallax para elementos flotantes ────────────────────── */
if (!prefersReducedMotion) {
    const oceanElements = document.querySelectorAll('.ocean-element');

    const handleParallax = () => {
        const scrolled = window.pageYOffset;
        oceanElements.forEach((el, index) => {
            const speed = 0.3 + index * 0.15;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    };

    // passive: true mejora el rendimiento del scroll
    window.addEventListener('scroll', handleParallax, { passive: true });
}


/* ── Animación de entrada para las obras (Intersection Observer) ── */
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Solo anima una vez
        }
    });
}, observerOptions);

document.querySelectorAll('.art-piece').forEach(piece => {
    piece.classList.add('fade-up'); // Clase inicial (invisible)
    observer.observe(piece);
});
