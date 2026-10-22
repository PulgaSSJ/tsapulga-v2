// ===== Novedades =====
(function () {
    const { icono, escapar, partesFecha, atributosLink, ETIQUETAS_TIPO } = TSA;
    const cont = document.getElementById("novedades");
    const filtros = document.getElementById("filtros");
    const todas = TSA.novedadesOrdenadas();
    let tipoActivo = "todas";

    // Solo mostramos filtros de los tipos que existen
    const tipos = [...new Set(todas.map(n => n.tipo))];
    const PLURALES = { anuncio: "Anuncios", video: "Videos", publicacion: "Publicaciones" };
    filtros.innerHTML = [["todas", "Todas", todas.length], ...tipos.map(t => [t, PLURALES[t] || t, todas.filter(n => n.tipo === t).length])]
        .map(([id, nombre, n]) => `<button class="chip" type="button" data-tipo="${id}" aria-pressed="${id === tipoActivo}">${escapar(nombre)} <span class="chip-count">${n}</span></button>`)
        .join("");

    function render() {
        const lista = tipoActivo === "todas" ? todas : todas.filter(n => n.tipo === tipoActivo);
        cont.innerHTML = lista.length ? lista.map(n => {
            const f = partesFecha(n.fecha);
            return `
                <article class="card news-item">
                    <time class="news-date" datetime="${n.fecha}"><strong>${f.dia}</strong>${f.mes} ${f.anio}</time>
                    <div>
                        <span class="badge badge-red">${ETIQUETAS_TIPO[n.tipo] || escapar(n.tipo)}</span>
                        <h3>${escapar(n.titulo)}</h3>
                        <p>${escapar(n.descripcion)}</p>
                        ${n.link ? `<a class="link-arrow" href="${n.link}"${atributosLink(n.link)}>${escapar(n.textoLink || "Ver más")} ${icono("arrowRight")}</a>` : ""}
                    </div>
                </article>`;
        }).join("") : `<div class="empty-state">Todavía no hay novedades. ¡Volvé pronto!</div>`;
    }

    filtros.addEventListener("click", e => {
        const chip = e.target.closest("[data-tipo]");
        if (!chip) return;
        tipoActivo = chip.dataset.tipo;
        filtros.querySelectorAll("[data-tipo]").forEach(c => c.setAttribute("aria-pressed", String(c === chip)));
        render();
    });

    render();
})();
