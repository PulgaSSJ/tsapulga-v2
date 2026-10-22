// ===== Piezas reutilizables entre páginas =====

(function () {
    const { icono, escapar, formatearFecha, atributosLink } = TSA;

    const ETIQUETAS_TIPO = { anuncio: "Anuncio", video: "Video", publicacion: "Publicación" };

    // Tarjeta de un stream del cine. Si se pasa "href", es un link; si no, un botón (para abrir el modal).
    function tarjetaVideo(v, { href } = {}) {
        const fecha = v.fecha ? formatearFecha(v.fecha) : "Fecha sin confirmar";
        const tipo = v.tipo === "video" ? "Video" : "Stream";
        const contenido = `
            <div class="thumb">
                <img src="https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg" alt="" loading="lazy" width="480" height="360">
                <span class="thumb-play">${icono("play")}</span>
                ${v.duracion ? `<span class="thumb-dur">${escapar(v.duracion)}</span>` : ""}
            </div>
            <h3>${escapar(v.titulo)}</h3>
            <div class="video-meta">${tipo} · ${fecha}</div>`;
        return href
            ? `<a class="video-card" href="${href}">${contenido}</a>`
            : `<button class="video-card" type="button" data-video="${escapar(v.youtubeId)}">${contenido}</button>`;
    }

    // Tarjeta compacta de novedad (home)
    function tarjetaNovedadMini(n) {
        return `
            <article class="card news-mini">
                <div class="news-mini-top">
                    <span class="badge badge-red">${ETIQUETAS_TIPO[n.tipo] || escapar(n.tipo)}</span>
                    <time datetime="${n.fecha}">${formatearFecha(n.fecha)}</time>
                </div>
                <h3>${escapar(n.titulo)}</h3>
                <p>${escapar(n.descripcion)}</p>
                ${n.link ? `<a class="link-arrow" href="${n.link}"${atributosLink(n.link)} style="margin-top:auto">${escapar(n.textoLink || "Ver más")} ${icono("arrowRight")}</a>` : ""}
            </article>`;
    }

    // Suma las duraciones "H:MM:SS" / "MM:SS" en segundos
    function segundosTotales(videos) {
        return videos.reduce((acc, v) => {
            if (!v.duracion) return acc;
            const partes = v.duracion.split(":").map(Number);
            while (partes.length < 3) partes.unshift(0);
            return acc + partes[0] * 3600 + partes[1] * 60 + partes[2];
        }, 0);
    }

    function horasTotales(videos) {
        return Math.floor(segundosTotales(videos) / 3600);
    }

    // "62+ horas", o "1 h 18 min" si es poco
    function duracionTotalTexto(videos) {
        const seg = segundosTotales(videos);
        if (seg >= 10 * 3600) return `${Math.floor(seg / 3600)}+ horas`;
        const h = Math.floor(seg / 3600);
        const min = Math.round((seg % 3600) / 60);
        return h ? `${h} h ${min} min` : `${min} min`;
    }

    function novedadesOrdenadas() {
        return [...TSA.novedades].sort((a, b) => b.fecha.localeCompare(a.fecha));
    }

    // Videos publicados (con youtubeId), del más nuevo al más viejo
    function videosPublicados() {
        return TSA.videos.filter(v => v.youtubeId).slice().reverse();
    }

    Object.assign(TSA, { ETIQUETAS_TIPO, tarjetaVideo, tarjetaNovedadMini, horasTotales, duracionTotalTexto, novedadesOrdenadas, videosPublicados });
})();
