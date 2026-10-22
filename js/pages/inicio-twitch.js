// ===== Inicio: player de Twitch con detección de "en vivo" =====
(function () {
    const canal = TSA.config.twitch;
    const badge = document.getElementById("live-badge");
    const estadoHero = document.getElementById("hero-estado");

    document.getElementById("twitch-canal").textContent = canal;
    document.getElementById("link-twitch").href = `https://www.twitch.tv/${canal}`;
    document.getElementById("link-kick").href = TSA.config.kick;

    function marcarEstado(enVivo) {
        badge.className = enVivo ? "badge badge-red" : "badge";
        badge.innerHTML = enVivo
            ? '<span class="dot dot-pulse"></span> En vivo ahora'
            : '<span class="dot"></span> Offline';
        if (enVivo) {
            estadoHero.querySelector("span:last-child").innerHTML = "¡Estoy en vivo!<small>Entrá a verme</small>";
            estadoHero.classList.add("en-vivo");
        }
    }

    // Twitch exige declarar el dominio que embebe el player; usamos el actual
    // para que funcione igual en el dominio final, en Netlify y en localhost.
    if (!window.Twitch || !location.hostname) {
        badge.innerHTML = '<span class="dot"></span> Player no disponible';
        return;
    }

    const embed = new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channel: canal,
        layout: "video",
        autoplay: false,
        parent: [location.hostname]
    });

    embed.addEventListener(Twitch.Embed.ONLINE, () => marcarEstado(true));
    embed.addEventListener(Twitch.Embed.OFFLINE, () => marcarEstado(false));

    // Si en unos segundos no llegó ningún evento, asumimos offline
    setTimeout(() => {
        if (badge.textContent.includes("Comprobando")) marcarEstado(false);
    }, 8000);
})();
