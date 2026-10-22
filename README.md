# TsaPulga v2

Sitio de TsaPulga: streams en vivo, el Cine TsaPulga, el server de Minecraft de la comunidad, comandos del chat, novedades y redes.

HTML, CSS y JavaScript puros: no hay que instalar ni compilar nada. Se sube tal cual a Netlify (o cualquier hosting estático).

## Qué editar para actualizar el sitio

Todo el contenido que cambia seguido está en `js/data/`. No hace falta tocar el HTML.

| Archivo | Para qué |
| --- | --- |
| `js/data/config.js` | Canal de Twitch, links de Kick/YouTube/Discord y datos del server (IP, versión, link del modpack, si está online) |
| `js/data/videos.js` | Cartelera del Cine (streams y videos). Van en orden cronológico; los videos llevan `tipo: "video"` |
| `js/data/novedades.js` | Novedades. Se ordenan solas por fecha |
| `js/data/comandos.js` | Comandos del chat, por grupo |
| `js/data/redes.js` | Redes sociales (footer, página de Redes y estadísticas del inicio) |

El menú y el footer están en un solo lugar: `js/layout.js`. Si agregás una página, sumala a la lista `PAGINAS` de ese archivo.

## Estructura

```
index.html, cine.html, servidor.html, comandos.html, novedades.html, redes.html, 404.html
css/styles.css         estilos y sistema de diseño (colores y tipografías en :root)
js/layout.js           header, footer, íconos y utilidades compartidas
js/componentes.js      tarjetas de video y de novedades reutilizables
js/pages/              lógica de cada página
js/data/               contenido editable
assets/                imágenes (ya optimizadas)
```

## Detalles

- **Player de Twitch:** se embebe con el dominio en el que esté publicado el sitio, así que anda igual en el dominio final, en Netlify y en local. Muestra "En vivo ahora" u "Offline" según el estado del canal.
- **Links directos al cine:** `cine.html#ID_DE_YOUTUBE` abre ese stream directamente (lo usan las tarjetas del inicio).
- **404:** Netlify muestra `404.html` automáticamente en cualquier URL que no exista.

## Verlo en local

Con la configuración de `.claude/launch.json` (servidor en PowerShell, puerto 8100). Abrir los `.html` con doble click no alcanza: el player de Twitch necesita un servidor.
