// ===== Inicio =====
(function () {
    const videos = TSA.videosPublicados();

    // Estadísticas del hero
    const stats = {
        streams: videos.length,
        horas: `${TSA.horasTotales(videos)}+`,
        redes: TSA.redes.length
    };
    document.querySelectorAll("[data-stat]").forEach(el => {
        el.textContent = stats[el.dataset.stat];
    });

    // Últimos 4 streams del cine (abren el video directo en cine.html)
    document.getElementById("ultimos-videos").innerHTML = videos
        .slice(0, 4)
        .map(v => TSA.tarjetaVideo(v, { href: `cine.html#${encodeURIComponent(v.youtubeId)}` }))
        .join("");

    // Últimas 3 novedades
    document.getElementById("ultimas-novedades").innerHTML = TSA.novedadesOrdenadas()
        .slice(0, 3)
        .map(TSA.tarjetaNovedadMini)
        .join("");

    document.getElementById("cta-discord").href = TSA.config.discord;
})();
