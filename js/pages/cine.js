// ===== Cine TsaPulga =====
(function () {
    const grid = document.getElementById("cine-grid");
    const buscador = document.getElementById("buscar");
    const contador = document.getElementById("contador");
    const dialog = document.getElementById("video-dialog");
    const player = document.getElementById("video-player");

    const nuevosPrimero = TSA.videosPublicados();
    const tipoDe = v => (v.tipo === "video" ? "video" : "stream");
    let orden = "nuevos";
    let tipo = "todo";

    // Filtros por tipo, con la cantidad de cada uno
    const cantidad = t => nuevosPrimero.filter(v => tipoDe(v) === t).length;
    const filtroTipo = document.getElementById("filtro-tipo");
    filtroTipo.innerHTML = [["todo", "Todo", nuevosPrimero.length], ["stream", "Streams", cantidad("stream")], ["video", "Videos", cantidad("video")]]
        .map(([id, nombre, n]) => `<button class="chip" type="button" data-tipo="${id}" aria-pressed="${id === tipo}">${nombre} <span class="chip-count">${n}</span></button>`)
        .join("");

    // Normaliza para buscar sin importar tildes ni mayúsculas
    const normalizar = t => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

    function plural(n, singular, pluralTexto) {
        return `${n} ${n === 1 ? singular : pluralTexto}`;
    }

    function render() {
        const q = normalizar(buscador.value.trim());
        const base = orden === "nuevos" ? nuevosPrimero : [...nuevosPrimero].reverse();
        const lista = base
            .filter(v => tipo === "todo" || tipoDe(v) === tipo)
            .filter(v => !q || normalizar(v.titulo).includes(q));

        grid.innerHTML = lista.length
            ? lista.map(v => TSA.tarjetaVideo(v)).join("")
            : `<div class="empty-state" style="grid-column:1/-1">No encontré nada${q ? ` con “${TSA.escapar(buscador.value)}”` : ""}.</div>`;

        const streams = lista.filter(v => tipoDe(v) === "stream").length;
        const videos = lista.length - streams;
        const partes = [];
        if (streams) partes.push(plural(streams, "stream", "streams"));
        if (videos) partes.push(plural(videos, "video", "videos"));
        contador.textContent = lista.length
            ? `${partes.join(" y ")} · ${TSA.duracionTotalTexto(lista)}`
            : "";
    }

    function abrir(id, { actualizarHash = true } = {}) {
        const v = nuevosPrimero.find(x => x.youtubeId === id);
        if (!v) return;
        const inicio = v.inicio > 0 ? `&start=${v.inicio}` : "";
        document.getElementById("video-titulo").textContent = v.titulo;
        document.getElementById("video-youtube").href = `https://www.youtube.com/watch?v=${v.youtubeId}${v.inicio ? `&t=${v.inicio}s` : ""}`;
        player.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0${inicio}" title="${TSA.escapar(v.titulo)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
        if (!dialog.open) dialog.showModal();
        if (actualizarHash) history.replaceState(null, "", `#${encodeURIComponent(id)}`);
    }

    function cerrar() {
        if (dialog.open) dialog.close();
    }

    // Al cerrar (botón, Escape o click afuera) cortamos el video y limpiamos el link
    dialog.addEventListener("close", () => {
        player.innerHTML = "";
        history.replaceState(null, "", location.pathname + location.search);
    });
    dialog.addEventListener("click", e => { if (e.target === dialog) cerrar(); });
    document.getElementById("video-cerrar").addEventListener("click", cerrar);

    grid.addEventListener("click", e => {
        const card = e.target.closest("[data-video]");
        if (card) abrir(card.dataset.video);
    });

    buscador.addEventListener("input", render);

    filtroTipo.addEventListener("click", e => {
        const chip = e.target.closest("[data-tipo]");
        if (!chip) return;
        tipo = chip.dataset.tipo;
        filtroTipo.querySelectorAll("[data-tipo]").forEach(c => c.setAttribute("aria-pressed", String(c === chip)));
        render();
    });

    document.querySelectorAll("[data-orden]").forEach(chip => {
        chip.addEventListener("click", () => {
            orden = chip.dataset.orden;
            document.querySelectorAll("[data-orden]").forEach(c => c.setAttribute("aria-pressed", String(c === chip)));
            render();
        });
    });

    render();

    // Link directo a un stream: cine.html#ID_DE_YOUTUBE
    const desdeHash = decodeURIComponent(location.hash.slice(1));
    if (desdeHash) abrir(desdeHash, { actualizarHash: false });
})();
