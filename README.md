<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jenny Cabrera – Edible Art Gallery</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap" rel="stylesheet">

<style>
:root {
    --bg-main: #0a0e27;
    --bg-accent: #1a2456;
    --gold: #d4af73;
    --text-main: #f4e8d8;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Cormorant Garamond', serif;
    background: var(--bg-main);
    color: var(--text-main);
    overflow-x: hidden;
}

/* ================= HERO ================= */

.hero {
    min-height: 100vh;
    display: grid;
    place-items: center;
    text-align: center;
    position: relative;
    background: linear-gradient(135deg, var(--bg-main), var(--bg-accent), var(--bg-main));
}

.hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 30% 50%, rgba(212,175,115,.12), transparent 55%),
        radial-gradient(circle at 70% 50%, rgba(212,175,115,.08), transparent 55%);
    animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
    0%,100% { opacity: .5; }
    50% { opacity: 1; }
}

.hero-content {
    position: relative;
    z-index: 1;
    animation: fadeUp 1.8s ease forwards;
}

@keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}

.logo {
    width: 160px;
    margin: 0 auto 2rem;
}

h1 {
    font-size: clamp(2.8rem, 6vw, 5rem);
    font-weight: 300;
    letter-spacing: .45rem;
    color: var(--gold);
    text-shadow: 0 0 30px rgba(212,175,115,.45);
}

.tagline {
    margin-top: .8rem;
    letter-spacing: .3rem;
    opacity: .85;
}

/* ================= GALLERY ================= */

.gallery {
    padding: clamp(4rem, 8vw, 6rem) 5%;
}

.gallery-grid {
    max-width: 1400px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 4rem;
}

.art-piece {
    transition: transform .6s cubic-bezier(.4,0,.2,1);
}

.art-piece:hover {
    transform: translateY(-12px);
}

.image-container {
    height: 480px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,.45);
}

.art-piece:nth-child(odd) .image-container {
    clip-path: polygon(0 0,100% 4%,100% 96%,0 100%);
}

.art-piece:nth-child(even) .image-container {
    clip-path: polygon(4% 0,100% 0,96% 100%,0 100%);
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(.88) contrast(1.1);
    transition: transform .8s ease, filter .8s ease;
}

.art-piece:hover img {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.15);
}

.art-info {
    margin-top: 1.5rem;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(26,36,86,.4), rgba(10,14,39,.7));
    backdrop-filter: blur(10px);
    border-left: 3px solid var(--gold);
}

.art-title {
    color: var(--gold);
    font-size: 1.9rem;
    margin-bottom: 1rem;
    font-style: italic;
}

.art-description {
    line-height: 1.8;
    opacity: .9;
}

/* ================= FLOATING ICONS ================= */

.ocean-element {
    position: fixed;
    pointer-events: none;
    opacity: .15;
    animation: float 22s ease-in-out infinite;
    will-change: transform;
}

.ocean-element:nth-child(1){top:12%;left:6%;font-size:60px;}
.ocean-element:nth-child(2){top:65%;right:10%;font-size:80px;animation-delay:6s;}
.ocean-element:nth-child(3){bottom:14%;left:14%;font-size:70px;animation-delay:12s;}

@keyframes float {
    0%,100%{transform:translateY(0)}
    50%{transform:translateY(-60px)}
}

/* ================= SCROLL ================= */

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    color: var(--gold);
    opacity: .6;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%,100%{transform:translate(-50%,0)}
    50%{transform:translate(-50%,-18px)}
}

/* ================= MOBILE ================= */

@media (max-width:768px){
    .image-container{height:380px}
    .art-piece .image-container{clip-path:none}
}
</style>
</head>

<body>

<div class="ocean-element">🌊</div>
<div class="ocean-element">🌺</div>
<div class="ocean-element">🦋</div>

<section class="hero">
    <div class="hero-content">
        <div class="logo" aria-label="Jenny Cabrera logo">
            <!-- Tu SVG original intacto -->
        </div>
        <h1>JENNY CABRERA</h1>
        <p class="tagline">EDIBLE ART GALLERY</p>
    </div>
    <div class="scroll-indicator">↓</div>
</section>

<section class="gallery">
<div class="gallery-grid">

<article class="art-piece">
    <div class="image-container">
        <img src="seahorse.png" alt="Caballito de mar de azúcar artístico" loading="lazy">
    </div>
    <div class="art-info">
        <h3 class="art-title">Fantasía Marina Efímera</h3>
        <p class="art-description">
            Escultura de azúcar soplado y modelado a mano que captura la iridiscencia marina.
        </p>
    </div>
</article>

<article class="art-piece">
    <div class="image-container">
        <img src="cake.png" alt="Pastel artístico de castaña y flores" loading="lazy">
    </div>
    <div class="art-info">
        <h3 class="art-title">Corazón Floreal Oculto</h3>
        <p class="art-description">
            Pétalos de rosa y crema floral envueltos en castaña tibia.
        </p>
    </div>
</article>

<article class="art-piece">
    <div class="image-container">
        <img src="orquid.png" alt="Orquídea de chocolate estilo Pollock" loading="lazy">
    </div>
    <div class="art-info">
        <h3 class="art-title">Orquídea Pollock</h3>
        <p class="art-description">
            Chocolate plástico pintado a mano en una explosión expresionista.
        </p>
    </div>
</article>

</div>
</section>

<script>
const elements = document.querySelectorAll('.ocean-element');
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    elements.forEach((el,i)=>{
        el.style.transform = `translateY(${y*(0.15+i*0.05)}px)`;
    });
});
</script>

</body>
</html>
