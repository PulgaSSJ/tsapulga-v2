// ===== Cartelera del cine en vivo =====
(function () {
    const { icono, escapar, formatearFecha } = TSA;
    const cont = document.getElementById("cartelera");
    const buscador = document.getElementById("buscar");
    const contador = document.getElementById("contador");
    const chipsOrden = document.getElementById("orden");
    const cartelera = TSA.cartelera || { actualizado: "", streams: [] };
    let orden = "numero";

    // Normaliza para buscar sin importar tildes ni mayúsculas
    const normalizar = t => String(t).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

    // "H:MM:SS" / "MM:SS" → segundos
    function segundos(duracion) {
        if (!duracion) return 0;
        const partes = duracion.split(":").map(Number);
        while (partes.length < 3) partes.unshift(0);
        return partes[0] * 3600 + partes[1] * 60 + partes[2];
    }

    // El mismo stream subido al cine (YouTube): por fecha si las dos la tienen; si no, por título
    const subidos = (TSA.videos || []).filter(v => v.youtubeId && v.tipo !== "video");
    function videoDe(s) {
        const titulo = normalizar(s.titulo);
        const candidatos = subidos.filter(v => (s.fecha && v.fecha ? v.fecha === s.fecha : normalizar(v.titulo) === titulo));
        // Dos streams el mismo día: desempata el título (si no coincide ninguno, mejor no linkear)
        return candidatos.length > 1
            ? candidatos.find(v => normalizar(v.titulo) === titulo) || null
            : candidatos[0] || null;
    }

    // La cartelera viene en orden cronológico: un stream sin fecha se ordena junto al anterior
    let ultimaFecha = "";
    const streams = [...cartelera.streams].sort((a, b) => a.n - b.n).map(s => {
        if (s.fecha) ultimaFecha = s.fecha;
        return {
            ...s,
            fechaOrden: s.fecha || ultimaFecha,
            seg: segundos(s.duracion),
            video: videoDe(s),
            texto: normalizar(`${s.titulo} ${formatearFecha(s.fecha)}`),
            tituloNorm: normalizar(s.titulo)
        };
    });

    const ORDENES = {
        numero: (a, b) => a.n - b.n,
        nuevos: (a, b) => b.fechaOrden.localeCompare(a.fechaOrden) || b.n - a.n,
        largos: (a, b) => b.seg - a.seg || a.n - b.n
    };

    // Cada palabra tiene que coincidir. Un número busca ese número de la cartelera, un año o el título.
    function coincide(s, palabras) {
        return palabras.every(p => /^\d+$/.test(p)
            ? s.n === Number(p) || (p.length >= 3 && s.fechaOrden.startsWith(p)) || s.tituloNorm.includes(p)
            : s.texto.includes(p));
    }

    function plural(n, singular, pluralTexto) {
        return `${n} ${n === 1 ? singular : pluralTexto}`;
    }

    function fila(s) {
        const cmd = `!pedir ${s.n}`;
        const meta = [
            s.fecha ? `<time datetime="${escapar(s.fecha)}">${formatearFecha(s.fecha)}</time>` : "",
            s.duracion ? `<span class="cartelera-dur"><span class="sr-only">Duración: </span>${icono("clock")}${escapar(s.duracion)}</span>` : ""
        ].filter(Boolean).join("");
        return `
            <li class="cartelera-item">
                <span class="cartelera-n"><span class="sr-only">Número </span><span aria-hidden="true">#</span>${s.n}</span>
                <div class="cartelera-info">
                    <h3>${escapar(s.titulo)}</h3>
                    ${meta ? `<div class="cartelera-meta">${meta}</div>` : ""}
                </div>
                <div class="cartelera-acciones">
                    <button class="cmd-copy cartelera-copiar" type="button" data-cmd="${escapar(cmd)}" aria-label="Copiar ${escapar(cmd)}" title="Copiar ${escapar(cmd)}"><span>${escapar(cmd)}</span>${icono("copy")}</button>
                    ${s.video ? `<a class="btn btn-ghost btn-sm cartelera-ver" href="cine.html#${encodeURIComponent(s.video.youtubeId)}">${icono("play")}Mirarlo<span class="sr-only"> en el cine: ${escapar(s.titulo)}</span></a>` : ""}
                </div>
            </li>`;
    }

    function render() {
        if (!streams.length) {
            cont.innerHTML = `<div class="empty-state">La cartelera todavía no está publicada. Volvé en un rato.</div>`;
            contador.textContent = "";
            return;
        }

        const q = normalizar(buscador.value).replace(/!pedir\b/g, " ").replace(/#/g, " ").trim();
        const palabras = q.split(/\s+/).filter(Boolean);
        // pegar el comando ("!pedir 14") o "#14" busca justo ese número, no títulos que tengan un 14
        const exacto = /^\s*(?:!pedir\s*|#)(\d+)\s*$/i.exec(buscador.value);
        const lista = (exacto ? streams.filter(s => s.n === Number(exacto[1])) : streams.filter(s => coincide(s, palabras))).sort(ORDENES[orden]);

        cont.innerHTML = lista.length
            ? `<ul class="cartelera-lista">${lista.map(fila).join("")}</ul>`
            : `<div class="empty-state">No encontré streams con “${escapar(buscador.value)}”.</div>`;

        // Con 0 también se escribe: así el lector de pantalla avisa que no hubo resultados
        contador.textContent = lista.length
            ? `${plural(lista.length, "stream", "streams")} · ${TSA.duracionTotalTexto(lista)}`
            : "0 streams";
    }

    cont.addEventListener("click", e => {
        const btn = e.target.closest("[data-cmd]");
        if (btn) TSA.copiar(btn.dataset.cmd, `${btn.dataset.cmd} copiado`);
    });

    chipsOrden.addEventListener("click", e => {
        const chip = e.target.closest("[data-orden]");
        if (!chip) return;
        orden = chip.dataset.orden;
        chipsOrden.querySelectorAll("[data-orden]").forEach(c => c.setAttribute("aria-pressed", String(c === chip)));
        render();
    });

    buscador.addEventListener("input", render);

    if (cartelera.actualizado) {
        document.getElementById("actualizada").textContent = `Actualizada el ${formatearFecha(cartelera.actualizado)}`;
    }
    render();
})();
