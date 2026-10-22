// ===== Servidor =====
(function () {
    document.getElementById("cta-discord").href = TSA.config.discord;

    // Resalta en la sub-navegación la sección que se está viendo
    const links = [...document.querySelectorAll(".subnav a")];
    const secciones = links.map(a => document.querySelector(a.getAttribute("href")));

    const io = new IntersectionObserver(entradas => {
        entradas.forEach(e => {
            if (!e.isIntersecting) return;
            links.forEach(a => a.classList.toggle("activo", a.getAttribute("href") === `#${e.target.id}`));
        });
    }, { rootMargin: "-40% 0px -55% 0px" });

    secciones.forEach(s => s && io.observe(s));
})();
