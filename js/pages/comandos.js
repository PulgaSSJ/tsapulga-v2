// ===== Comandos =====
(function () {
    const { icono, escapar } = TSA;
    const cont = document.getElementById("comandos");
    const buscador = document.getElementById("buscar");
    const filtros = document.getElementById("filtros");
    let grupoActivo = "todos";

    const normalizar = t => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

    filtros.innerHTML = [{ id: "todos", nombre: "Todos", lista: TSA.comandos.flatMap(g => g.lista) }, ...TSA.comandos]
        .map(g => `<button class="chip" type="button" data-grupo="${g.id}" aria-pressed="${g.id === grupoActivo}">${escapar(g.nombre)} <span class="chip-count">${g.lista.length}</span></button>`)
        .join("");

    // Descripción del grupo; si tiene "link", esa palabra se vuelve un link (o va al final si no está)
    function descripcion(g) {
        const texto = escapar(g.descripcion);
        if (!g.link) return texto;
        const palabra = escapar(g.link.texto);
        const a = `<a href="${escapar(g.link.href)}">${palabra}</a>`;
        return texto.includes(palabra) ? texto.replace(palabra, a) : `${texto} ${a}`;
    }

    function render() {
        const q = normalizar(buscador.value.trim());
        const grupos = TSA.comandos
            .filter(g => grupoActivo === "todos" || g.id === grupoActivo)
            .map(g => ({
                ...g,
                lista: g.lista.filter(c => !q || normalizar(c.cmds.join(" ") + " " + c.desc).includes(q))
            }))
            .filter(g => g.lista.length);

        if (!grupos.length) {
            cont.innerHTML = `<div class="empty-state">No encontré comandos con “${escapar(buscador.value)}”.</div>`;
            return;
        }

        cont.innerHTML = grupos.map(g => `
            <section class="cmd-group" aria-labelledby="g-${g.id}">
                <div class="cmd-group-head">
                    <h2 id="g-${g.id}">${escapar(g.nombre)}</h2>
                    <p>${descripcion(g)}</p>
                </div>
                <div class="cmd-list">
                    ${g.lista.map(c => `
                        <div class="cmd-row">
                            <div class="cmd-names">
                                ${c.cmds.map(n => `<button class="cmd-copy" type="button" data-cmd="${escapar(n)}" title="Copiar ${escapar(n)}"><span>${escapar(n)}</span>${icono("copy")}</button>`).join("")}
                            </div>
                            <div class="cmd-desc">${escapar(c.desc)}</div>
                        </div>`).join("")}
                </div>
            </section>`).join("");
    }

    cont.addEventListener("click", e => {
        const btn = e.target.closest("[data-cmd]");
        if (btn) TSA.copiar(btn.dataset.cmd, `${btn.dataset.cmd} copiado`);
    });

    filtros.addEventListener("click", e => {
        const chip = e.target.closest("[data-grupo]");
        if (!chip) return;
        grupoActivo = chip.dataset.grupo;
        filtros.querySelectorAll("[data-grupo]").forEach(c => c.setAttribute("aria-pressed", String(c === chip)));
        render();
    });

    buscador.addEventListener("input", render);
    document.getElementById("cta-discord").href = TSA.config.discord;
    render();
})();
