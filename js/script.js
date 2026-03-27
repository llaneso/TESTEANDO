async function buscarJugador() {
    const input = document.getElementById("player").value;

    // Separar nombre y tag
    const [nombre, tag] = input.split("#");

    // URL de la API (Tracker Network)
    const url = `https://api.tracker.gg/api/v2/valorant/standard/profile/riot/${nombre}%23${tag}`;

    try {
        const respuesta = await fetch(url);
        const data = await respuesta.json();

        mostrarStats(data);
    } catch (error) {
        console.error("Error al obtener datos:", error);
        document.getElementById("stats").innerHTML = "<p>Error al buscar jugador.</p>";
    }
}
function mostrarStats(data) {
    const stats = data.data.segments[0].stats;

    const jugadas = stats.matchesPlayed.value;
    const ganadas = stats.matchesWon.value;
    const perdidas = stats.matchesLost.value;
    const kda = stats.kDARatio.value;

    document.getElementById("stats").innerHTML = `
        <p>Partidas jugadas: ${jugadas}</p>
        <p>Partidas ganadas: ${ganadas}</p>
        <p>Partidas perdidas: ${perdidas}</p>
        <p>KDA: ${kda}</p>
    `;
}