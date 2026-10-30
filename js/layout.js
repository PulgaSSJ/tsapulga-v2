// ===== Layout compartido: íconos, header, footer y utilidades =====
// Se carga en el <head> (después de los datos) para que el header y el footer
// aparezcan sin parpadeo. El menú se edita una sola vez acá.

(function () {
    const TSA = window.TSA;

    // ---------- Íconos (trazos estilo Lucide, viewBox 24) ----------
    const ICONOS = {
        arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
        arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
        copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
        check: '<path d="M20 6 9 17l-5-5"/>',
        search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
        play: '<path d="M6 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L7.5 3.64A1 1 0 0 0 6 4.5z" fill="currentColor" stroke="none"/>',
        x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
        menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
        external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
        film: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>',
        server: '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>',
        terminal: '<path d="m4 17 6-6-6-6"/><path d="M12 19h8"/>',
        bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
        clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
        users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
        download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
        sword: '<path d="M14.5 17.5 3 6V3h3l11.5 11.5"/><path d="m13 19 6-6"/><path d="m16 16 4 4"/><path d="m19 21 2-2"/>',
        sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/>',
        music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
        radio: '<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49"/><path d="M7.76 16.24a6 6 0 0 1 0-8.49"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 19.07a10 10 0 0 1 0-14.14"/>',
        compass: '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z"/>',
        mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',
        skull: '<circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M8 20v2h8v-2"/><path d="m12.5 17-.5-1-.5 1h1z"/><path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"/>',
        user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
        database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
        trending: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
        mountain: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
        package: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
        cog: '<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/>',
        mapPin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
        message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
        ban: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
        bug: '<path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/>',
        crown: '<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/>',
        sprout: '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
        flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
        home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
        zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>'
    };

    function icono(nombre, clase = "icon") {
        return `<svg class="${clase}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONOS[nombre] || ""}</svg>`;
    }

    function iconoRed(red, tam = 18) {
        return `<svg viewBox="0 0 24 24" width="${tam}" height="${tam}" fill="currentColor" aria-hidden="true"><path d="${red.icono}"/></svg>`;
    }

    // ---------- Utilidades ----------
    const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

    function partesFecha(iso) {
        if (!iso) return null;
        const [y, m, d] = iso.split("-").map(Number);
        return { dia: d, mes: MESES[m - 1], anio: y };
    }

    function formatearFecha(iso) {
        const p = partesFecha(iso);
        return p ? `${p.dia} ${p.mes} ${p.anio}` : "";
    }

    function escapar(texto) {
        return String(texto).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    }

    function esExterno(url) {
        return /^https?:\/\//.test(url);
    }

    function atributosLink(url) {
        return esExterno(url) ? ' target="_blank" rel="noopener"' : "";
    }

    let toastTimer;
    function toast(mensaje) {
        let el = document.querySelector(".toast");
        if (!el) {
            el = document.createElement("div");
            el.className = "toast";
            el.setAttribute("role", "status");
            el.setAttribute("aria-live", "polite");
            document.body.appendChild(el);
        }
        el.innerHTML = `${icono("check")}<span>${escapar(mensaje)}</span>`;
        void el.offsetWidth; // fuerza el reflow para que la transición arranque
        el.classList.add("visible");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.classList.remove("visible"), 1800);
    }

    async function copiar(texto, mensaje = "Copiado al portapapeles") {
        try {
            await navigator.clipboard.writeText(texto);
        } catch (e) {
            // Respaldo para navegadores sin permiso de clipboard
            const ta = document.createElement("textarea");
            ta.value = texto;
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            ta.remove();
        }
        toast(mensaje);
    }

    // ---------- Navegación ----------
    const PAGINAS = [
        { id: "inicio", texto: "Inicio", href: "index.html" },
        { id: "cine", texto: "Cine", href: "cine.html" },
        { id: "cartelera", texto: "Cartelera", href: "cartelera.html" },
        { id: "servidor", texto: "Servidor", href: "servidor.html" },
        { id: "comandos", texto: "Comandos", href: "comandos.html" },
        { id: "novedades", texto: "Novedades", href: "novedades.html" },
        { id: "redes", texto: "Redes", href: "redes.html" }
    ];

    const twitchUrl = `https://www.twitch.tv/${TSA.config.twitch}`;

    class SiteHeader extends HTMLElement {
        connectedCallback() {
            const actual = this.getAttribute("current");
            this.innerHTML = `
                <a class="skip-link" href="#contenido">Saltar al contenido</a>
                <header class="site-header">
                    <div class="container">
                        <a class="brand" href="index.html" aria-label="TsaPulga, ir al inicio">
                            <img src="assets/avatar.png" alt="" width="34" height="34">
                            <span>Tsa<b>Pulga</b></span>
                        </a>
                        <nav class="nav" id="nav-principal" aria-label="Principal">
                            ${PAGINAS.map(p => `<a href="${p.href}"${p.id === actual ? ' aria-current="page"' : ""}>${p.texto}</a>`).join("")}
                            <a class="btn btn-primary nav-mobile-only" href="${twitchUrl}" target="_blank" rel="noopener">${icono("radio")} Ver en Twitch</a>
                        </nav>
                        <a class="btn btn-primary btn-sm header-cta" href="${twitchUrl}" target="_blank" rel="noopener">${icono("radio")} Ver en Twitch</a>
                        <button class="nav-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav-principal">${icono("menu")}</button>
                    </div>
                </header>`;

            const toggle = this.querySelector(".nav-toggle");
            const nav = this.querySelector(".nav");
            const cerrar = () => {
                nav.classList.remove("abierto");
                toggle.setAttribute("aria-expanded", "false");
                toggle.innerHTML = icono("menu");
            };
            toggle.addEventListener("click", () => {
                const abierto = nav.classList.toggle("abierto");
                toggle.setAttribute("aria-expanded", String(abierto));
                toggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
                toggle.innerHTML = icono(abierto ? "x" : "menu");
            });
            nav.querySelectorAll("a").forEach(a => a.addEventListener("click", cerrar));
            document.addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });
        }
    }

    class SiteFooter extends HTMLElement {
        connectedCallback() {
            const anio = new Date().getFullYear();
            const s = TSA.config.server;
            this.innerHTML = `
                <footer class="site-footer">
                    <div class="container">
                        <div class="footer-grid">
                            <div>
                                <a class="brand" href="index.html">
                                    <img src="assets/avatar.png" alt="" width="34" height="34">
                                    <span>Tsa<b>Pulga</b></span>
                                </a>
                                <p>Streams en vivo, el Cine TsaPulga con mis streams y videos, y los servidores de juegos de la comunidad.</p>
                                <div class="social-row">
                                    ${TSA.redes.map(r => `<a class="social-icon" href="${r.url}" target="_blank" rel="noopener" aria-label="${escapar(r.nombre)}" title="${escapar(r.nombre)}">${iconoRed(r)}</a>`).join("")}
                                </div>
                            </div>
                            <div>
                                <h4>Sitio</h4>
                                <ul>${PAGINAS.map(p => `<li><a href="${p.href}">${p.texto}</a></li>`).join("")}</ul>
                            </div>
                            <div>
                                <h4>Comunidad</h4>
                                <ul>
                                    <li><a href="${TSA.config.discord}" target="_blank" rel="noopener">Discord</a></li>
                                    <li><a href="servidor.html">Server ${escapar(s.nombre)}</a></li>
                                    <li><a href="${twitchUrl}" target="_blank" rel="noopener">Twitch</a></li>
                                    <li><a href="${TSA.config.kick}" target="_blank" rel="noopener">Kick</a></li>
                                    <li><a href="${TSA.config.youtube}" target="_blank" rel="noopener">YouTube</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-bottom">
                            <span>© ${anio} TsaPulga</span>
                            <span>Hecho para la comunidad</span>
                        </div>
                    </div>
                </footer>`;
        }
    }

    customElements.define("site-header", SiteHeader);
    customElements.define("site-footer", SiteFooter);

    // ---------- Comportamientos comunes (al cargar el DOM) ----------
    document.addEventListener("DOMContentLoaded", () => {
        // Íconos en el HTML: <i data-icon="film"></i>
        document.querySelectorAll("i[data-icon]").forEach(el => {
            el.outerHTML = icono(el.dataset.icon);
        });

        // Datos del server en cualquier página: <span data-server="ip"></span>
        document.querySelectorAll("[data-server]").forEach(el => {
            const valor = TSA.config.server[el.dataset.server];
            if (valor !== undefined) el.textContent = valor;
        });
        document.querySelectorAll("[data-server-href]").forEach(el => {
            el.href = TSA.config.server[el.dataset.serverHref];
        });

        // Botones "Copiar IP"
        document.querySelectorAll("[data-copiar-ip]").forEach(btn => {
            btn.addEventListener("click", () => copiar(TSA.config.server.ip, "IP copiada"));
        });

        // Estado del server en vivo: <span data-server-estado>, <div data-server-jugadores>, <small data-server-resumen>
        if (document.querySelector("[data-server-estado], [data-server-jugadores], [data-server-resumen]")) {
            consultarServer();
            setInterval(() => { if (!document.hidden) consultarServer(); }, 60000);
        }

        // Animación de entrada al hacer scroll
        const reveals = document.querySelectorAll(".reveal");
        if ("IntersectionObserver" in window) {
            const io = new IntersectionObserver(entradas => {
                entradas.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add("visible");
                        io.unobserve(e.target);
                    }
                });
            }, { rootMargin: "0px 0px -8% 0px" });
            reveals.forEach(el => io.observe(el));
        } else {
            reveals.forEach(el => el.classList.add("visible"));
        }
    });

    // ---------- Estado del server de Minecraft (api.mcstatus.io, se actualiza cada minuto) ----------
    // (mcsrvstat.us no sirve: no logra leer la respuesta del server con tantos mods)
    async function consultarServer() {
        let datos = null;
        try {
            const r = await fetch(`https://api.mcstatus.io/v2/status/java/${encodeURIComponent(TSA.config.server.ip)}`);
            if (r.ok) datos = await r.json();
        } catch { /* sin conexión o API caída: se deja como está */ }
        if (datos) mostrarServer(datos);
    }

    function mostrarServer(d) {
        const on = d.online ? (d.players?.online ?? 0) : 0;
        const max = d.players?.max ?? TSA.config.server.jugadores;
        // los que ocultan su nombre en las listas de servers vienen con uuid en ceros: se cuentan en "+N más"
        const nombres = d.online ? (d.players?.list || [])
            .filter(p => p.uuid !== "00000000-0000-0000-0000-000000000000")
            .map(p => p.name_clean).filter(Boolean) : [];

        document.querySelectorAll("[data-server-estado]").forEach(el => {
            el.className = d.online ? "badge badge-green" : "badge badge-red";
            el.innerHTML = d.online
                ? `<span class="dot dot-pulse"></span> Online · ${on}/${max}`
                : `<span class="dot"></span> Offline`;
        });

        document.querySelectorAll("[data-server-resumen]").forEach(el => {
            el.textContent = !d.online ? "Apagado en este momento"
                : on === 0 ? "Online · nadie jugando"
                : `Online · ${on} jugando ahora`;
        });

        document.querySelectorAll("[data-server-jugadores]").forEach(el => {
            let cuerpo;
            if (!d.online) cuerpo = `<p class="jugadores-vacio">El server está apagado en este momento.</p>`;
            else if (on === 0) cuerpo = `<p class="jugadores-vacio">No hay nadie conectado ahora. ¡Entrá vos!</p>`;
            else {
                const resto = on - nombres.length;
                cuerpo = `<div class="jugadores">${nombres.map(n =>
                    `<span class="jugador"><span class="jugador-inicial">${escapar(n.charAt(0).toUpperCase())}</span>${escapar(n)}</span>`).join("")}${
                    resto > 0 ? `<span class="jugador jugador-mas">+${resto} más</span>` : ""}</div>`;
            }
            el.innerHTML = `<div class="server-live-titulo">Conectados ahora</div>${cuerpo}`;
            el.hidden = false;
        });
    }

    // API pública para los scripts de cada página
    Object.assign(TSA, { icono, iconoRed, partesFecha, formatearFecha, escapar, atributosLink, copiar, toast });
})();
