[README.md](https://github.com/user-attachments/files/26988785/README.md)

# Jenny Cabrera — Edible Art Gallery 🌊🌺

Sitio portfolio que presenta obras de arte comestible: esculturas de azúcar soplado, pasteles artísticos y flores de chocolate pintadas a mano.

---

## 🗂 Estructura del proyecto

```
jenny-cabrera-gallery/
├── index.html          # Estructura semántica principal
├── css/
│   └── styles.css      # Estilos con variables CSS
├── js/
│   └── main.js         # Interacciones y animaciones
├── img/
│   ├── seahorse.png    # Fantasía Marina Efímera
│   ├── cake.png        # Corazón Floreal Oculto
│   └── orquid.png      # Orquídea Pollock
└── README.md
```

---

## 🛠 Stack

- **HTML5** semántico (`<main>`, `<section>`, `<article>`, `<ul role="list">`)
- **CSS3** — variables, `clip-path`, animaciones, `clamp()`, `prefers-reduced-motion`
- **Vanilla JS** — `IntersectionObserver`, parallax con `passive: true`

---

## ✨ Características

- Animaciones de entrada al hacer scroll (IntersectionObserver)
- Parallax en elementos decorativos flotantes
- Respeta `prefers-reduced-motion` para usuarios sensibles al movimiento
- Imágenes con `loading="lazy"` para mejor rendimiento
- Tipografía escalable con `clamp()` (responsive sin media queries extra)
- Variables CSS centralizadas para fácil mantenimiento de colores

---

## 🚀 Cómo correr localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/jenny-cabrera-gallery.git
   ```
2. Abrir `index.html` en el navegador, o usar una extensión como **Live Server** en VS Code.

No requiere instalación de dependencias ni build steps.

---

## 📸 Créditos

Todas las obras son creaciones originales de **Jenny Cabrera x gemini**.
