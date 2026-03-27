async function buscarJugador() {
    const nombre = document.getElementById("playerName").value.trim();
    const tag = document.getElementById("playerTag").value.trim();

    if (nombre !== "Frixuelos" || tag !== "G59") {
        document.getElementById("stats").innerHTML = "<p>Jugador no encontrado.</p>";
        return;
    }

    // Datos falsos
    const dataFalsa = {
        username: "Frixuelos",
        tag: "G59",
        matchesPlayed: 120,
        matchesWon: 119,
        matchesLost: 1,
        kda: 3.43
    };

    mostrarStats(dataFalsa);
}
    // Aqui pongo la funcion que muestra los datos en la página
    function mostrarStats(stats) {
        document.getElementById("stats").innerHTML = `
           <div class="stats-card">
            <div class="stats-title">${stats.username}#${stats.tag}</div>

            <div class="stat-line">
                <img src="https://cdn-icons-png.flaticon.com/512/32/32177.png">
                Partidas jugadas: <strong>${stats.matchesPlayed}</strong>
            </div>

            <div class="stat-line">
                <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png">
                Ganadas: <strong>${stats.matchesWon}</strong>
            </div>

            <div class="stat-line">
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png">
                Perdidas: <strong>${stats.matchesLost}</strong>
            </div>

            <div class="stat-line">
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png">
                KDA: <strong>${stats.kda}</strong>
            </div>
        </div> 
        `;
    }