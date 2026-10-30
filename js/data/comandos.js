// ===== Comandos del chat (Twitch y Kick) =====
// Cada grupo tiene su lista. En "cmds" van el comando y sus alias (el primero es el principal).
// "link" (opcional) convierte esa palabra de la descripción del grupo en un link.

TSA.comandos = [
    {
        id: "generales",
        nombre: "Generales",
        descripcion: "Para cualquiera en el chat",
        lista: [
            { cmds: ["!server", "!mc"], desc: "Te tira la info para conectarte al server de Minecraft." },
            { cmds: ["!web"], desc: "Te pasa el link a esta página." },
            { cmds: ["!clip"], desc: "Crea un clip del momento en el que lo escribiste." },
            { cmds: ["!sonando", "!quesuena"], desc: "Te dice qué canción está sonando en este momento." }
        ]
    },
    {
        id: "musica",
        nombre: "Música (Spotify)",
        descripcion: "Para pedir y manejar la cola de canciones. Cualquiera puede usarlos.",
        lista: [
            { cmds: ["!sr"], desc: "Pedí una canción para sumarla a la cola." },
            { cmds: ["!skip", "!next"], desc: "Saltea la canción que está sonando." },
            { cmds: ["!voteskip"], desc: "Vota para saltear la canción actual entre todos." },
            { cmds: ["!remove", "!removeFromQueue"], desc: "Sacá una canción de la cola." },
            { cmds: ["!song", "!currentSong"], desc: "Muestra el nombre de la canción actual." },
            { cmds: ["!lastSong"], desc: "Muestra cuál fue la última canción que sonó." },
            { cmds: ["!songLink"], desc: "Te pasa el link de Spotify de la canción actual." },
            { cmds: ["!playlist"], desc: "Muestra la playlist que está sonando ahora." },
            { cmds: ["!queue"], desc: "Muestra las canciones que están en cola." },
            { cmds: ["!myQueue", "!myRequests", "!queuePos"], desc: "Te dice en qué posición de la cola está tu pedido." },
            { cmds: ["!requests", "!allRequests"], desc: "Lista todos los pedidos hechos hasta ahora." },
            { cmds: ["!like", "!unlike"], desc: "Marcá (o sacá) la canción actual como una de tus favoritas." },
            { cmds: ["!wrongsong"], desc: "Reportá que sonó una canción distinta a la pedida." },
            { cmds: ["!topSongs", "!topArtists"], desc: "Muestra las canciones y artistas más pedidos del canal." },
            { cmds: ["!myTopSongs", "!myTopArtists"], desc: "Muestra tus propias canciones y artistas más pedidos." }
        ]
    },
    {
        id: "cine",
        nombre: "Cine TsaPulga",
        descripcion: "Cuando el stream es del cine: elegí qué se ve. La lista con los números está en la Cartelera.",
        link: { texto: "Cartelera", href: "cartelera.html" },
        lista: [
            { cmds: ["1", "2"], desc: "En la votación: 1 para que salga uno al azar, 2 para abrir la cartelera y elegir." },
            { cmds: ["!pedir 14"], desc: "Pedí un stream (con su número de la Cartelera) para que pase después: entra a la cola. Uno por persona cada 10 minutos." },
            { cmds: ["!cola"], desc: "Te dice qué viene en la cola del cine y en qué lugar está tu pedido." },
            { cmds: ["!cancelar"], desc: "Saca tu pedido de la cola (un canje de puntos lo saca un mod)." },
            { cmds: ["!skip", "!saltar"], desc: "Vota para saltar el video del cine que se está viendo." },
            { cmds: ["!cine"], desc: "Te dice qué stream se está viendo en el cine." },
            { cmds: ["!lista"], desc: "Te pasa el link a la Cartelera con todos los streams numerados." }
        ]
    },
    {
        id: "mods",
        nombre: "Solo moderadores",
        descripcion: "Control del canal y de la música, exclusivo para el equipo de mods",
        lista: [
            { cmds: ["!so"], desc: "Hace un shoutout a otro streamer." },
            { cmds: ["!t"], desc: "Cambia el título del stream." },
            { cmds: ["!c"], desc: "Cambia la categoría del stream." },
            { cmds: ["!vol", "!volume"], desc: "Cambia el volumen de la música." },
            { cmds: ["!pause", "!stop"], desc: "Pausa la canción actual." },
            { cmds: ["!play", "!continue"], desc: "Reanuda la reproducción." },
            { cmds: ["!restart", "!replay"], desc: "Reinicia la canción actual desde el principio." },
            { cmds: ["!back", "!previous"], desc: "Vuelve a la canción anterior." },
            { cmds: ["!changePlaylist", "!setPlaylist"], desc: "Cambia la playlist que está sonando." },
            { cmds: ["!bannedSongs"], desc: "Muestra la lista de canciones baneadas." },
            { cmds: ["!banSong", "!excludeSong"], desc: "Banea una canción para que no se pueda volver a pedir." },
            { cmds: ["!unbanSong", "!includeSong"], desc: "Saca una canción de la lista de baneadas." },
            { cmds: ["!changeDevice", "!setDevice"], desc: "Cambia el dispositivo donde suena la música." },
            { cmds: ["!devices", "!deviceList"], desc: "Lista los dispositivos disponibles." },
            { cmds: ["!getPlaylists"], desc: "Lista las playlists disponibles." },
            { cmds: ["!addSong", "!add"], desc: "Agrega la canción actual a una playlist." },
            { cmds: ["!addSongToPlaylistFromInput"], desc: "Agrega una canción específica a una playlist." },
            { cmds: ["!addToLikedSongs", "!addLike"], desc: "Agrega la canción actual a los favoritos de Spotify del canal." },
            { cmds: ["!cine saltar", "!cine pausa", "!cine seguir"], desc: "Cine: salta, pausa o sigue el video que se está viendo." },
            { cmds: ["!cine votar", "!cine cartelera", "!cine terminar"], desc: "Cine: arranca la votación ya, abre directo la cartelera o la cierra con los votos que hay." },
            { cmds: ["!cine poner 14", "!cine cola 14", "!cine quitar 14"], desc: "Cine: pasa un stream ya, lo pone primero en la cola (detrás de los canjes) o lo saca de la cola." },
            { cmds: ["!cine vuelvo 10", "!cine volví"], desc: "Cine: pone o saca el cartel de «Vuelvo en 10 min»." }
        ]
    }
];
