let recientes = [];

async function buscarJugador() {
    const nombre = document.getElementById("playerName").value.trim();
    const tag = document.getElementById("playerTag").value.trim();

    if (nombre === "Frixuelos" && tag === "G59") {

        guardarReciente(nombre, tag);

        const dataFalsa = {
            username: "Frixuelos",
            tag: "G59",
            matchesPlayed: 120,
            matchesWon: 119,
            matchesLost: 1,
            kda: 3.43
        };

        mostrarStats(dataFalsa);
        return;
    }

    document.getElementById("stats").innerHTML = "<p>Jugador no encontrado.</p>";
}

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
        </div>`;
}

function guardarReciente(nombre, tag) {
    const full = `${nombre}#${tag}`;

    if (!recientes.includes(full)) {
        recientes.unshift(full);
    }

    if (recientes.length > 6) {
        recientes.pop();
    }

    actualizarDesplegable();
}

function actualizarDesplegable() {
    const lista = document.getElementById("recentList");
    lista.innerHTML = "";

    recientes.forEach(jugador => {
        const div = document.createElement("div");
        div.textContent = jugador;

        div.onclick = () => {
            const [nombre, tag] = jugador.split("#");
            document.getElementById("playerName").value = nombre;
            document.getElementById("playerTag").value = tag;
        };

        lista.appendChild(div);
    });
}

document.getElementById("recentBtn").onclick = () => {
    const lista = document.getElementById("recentList");
    lista.classList.toggle("hidden");
    lista.classList.toggle("show");
};
