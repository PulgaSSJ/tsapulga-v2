// ===== Cartelera del Cine TsaPulga: streams y videos =====
// Para sumar algo: agregá un objeto en la lista, respetando el orden cronológico (del más viejo al más nuevo).
// - titulo: el nombre del stream o video
// - tipo: "video" para videos editados; si no lo ponés, se toma como "stream"
// - fecha: "AAAA-MM-DD" (si no la sabés, dejala en "")
// - youtubeId: lo que va después de "watch?v=" (o de "youtu.be/") en el link de YouTube
// - inicio: segundo en el que arranca de verdad (para saltear la espera), 0 si arranca de una
// - duracion: "H:MM:SS" o "MM:SS"

TSA.videos = [
    { titulo: "Chupi stream", fecha: "2023-08-19", youtubeId: "Y9ojJqlKReQ", inicio: 0, duracion: "2:45:51" },
    { titulo: "La última cena", fecha: "2023-08-20", youtubeId: "flVgCKVkWFY", inicio: 0, duracion: "3:11:06" },
    { titulo: "MC del bueno", fecha: "2023-08-22", youtubeId: "ku61_7VZQ9E", inicio: 0, duracion: "5:26:49" },
    { titulo: "Fortnite y Valorant a pleno", fecha: "2023-12-21", youtubeId: "h6ZiasKVIw8", inicio: 0, duracion: "2:53:41" },
    { titulo: "Peleitas y Valorant", fecha: "2024-01-13", youtubeId: "xquIsTutsD8", inicio: 0, duracion: "3:35:40" },
    { titulo: "Valorant del malo", fecha: "2024-01-14", youtubeId: "wnGUbjNyMVc", inicio: 0, duracion: "3:10:52" },
    { titulo: "Jugando por primera vez al R6", tipo: "video", fecha: "2024-02-27", youtubeId: "kdxfWQ5QoOE", inicio: 0, duracion: "27:02" },
    { titulo: "La pelota no se mancha · FreestyleFootball R EP1", tipo: "video", fecha: "2024-02-28", youtubeId: "bTZA0vLhgqw", inicio: 0, duracion: "19:16" },
    { titulo: "Dragon Ball FighterZ · EP1", tipo: "video", fecha: "2024-02-29", youtubeId: "eJma7ASQc9k", inicio: 0, duracion: "15:51" },
    { titulo: "Hay que jubilar a los muchachos · FreestyleFootball R EP2", tipo: "video", fecha: "2024-03-02", youtubeId: "dLBBHY0F-Ps", inicio: 0, duracion: "11:15" },
    { titulo: "Displicencia team · FreestyleFootball R EP3", tipo: "video", fecha: "2024-03-09", youtubeId: "tW1bdfJhbw0", inicio: 0, duracion: "5:00" },
    { titulo: "Terror en Minecraft y Valorant", fecha: "2024-03-20", youtubeId: "FssmYlGS_sE", inicio: 240, duracion: "3:10:40" },
    { titulo: "La verdadera variedad", fecha: "2024-03-24", youtubeId: "_igsEEChPbU", inicio: 60, duracion: "4:14:01" },
    { titulo: "Variedad y charlita chill", fecha: "2024-03-30", youtubeId: "5hbsChQqAdg", inicio: 0, duracion: "8:57:01" },
    { titulo: "Unturned, Wildlands y Naruto", fecha: "2024-03-31", youtubeId: "0tleW73f_jg", inicio: 0, duracion: "5:12:31" },
    { titulo: "Creando un imperio y Valorant del malo", fecha: "2024-07-30", youtubeId: "fuzAuhqVy2A", inicio: 0, duracion: "1:55:41" },
    { titulo: "InsomnIA y Valorant", fecha: "", youtubeId: "k-5J4AjVNMk", inicio: 316, duracion: "4:01:01" },
    { titulo: "Jugar FIFA sale mal", fecha: "2024-07-30", youtubeId: "ze7SCILukIk", inicio: 204, duracion: "1:27:14" },
    { titulo: "Seguimos con el imperio", fecha: "2024-08-04", youtubeId: "_bRBezFtUsY", inicio: 487, duracion: "4:39:01" },
    { titulo: "Juntadita de los pibes", fecha: "2024-09-01", youtubeId: "FxA_AN8nDsA", inicio: 522, duracion: "2:52:41" },
    { titulo: "Palworld y FIFA", fecha: "2025-01-03", youtubeId: "JcjUNyKO9P8", inicio: 0, duracion: "4:42:21" }

    // Pendientes de subir a YouTube (completar youtubeId y duracion cuando estén):
    // { titulo: "Mi 1er stream (otra vez)", fecha: "2026-06-19", youtubeId: "", inicio: 148, duracion: "" },
    // { titulo: "Mi 2do stream (otra vez)", fecha: "2026-06-23", youtubeId: "", inicio: 464, duracion: "" },
    // { titulo: "Stream de chill", fecha: "2026-06-25", youtubeId: "", inicio: 141, duracion: "" },
    // { titulo: "Continuamos el survival", fecha: "2026-06-30", youtubeId: "", inicio: 671, duracion: "" },
    // { titulo: "Todo Minecraft", fecha: "2026-07-01", youtubeId: "", inicio: 76, duracion: "" },
    // { titulo: "Only Minecraft", fecha: "2026-07-04", youtubeId: "", inicio: 410, duracion: "" },
    // { titulo: "912 agente pulgoso", fecha: "2026-07-06", youtubeId: "", inicio: 144, duracion: "" },
    // { titulo: "Otra vez sopa", fecha: "2026-07-08", youtubeId: "", inicio: 275, duracion: "" },
    // { titulo: "La vuelta de Palworld", fecha: "2026-07-13", youtubeId: "", inicio: 0, duracion: "" }
];
