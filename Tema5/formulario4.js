"use strict";

let votos = [
    { sabor: "vainilla", puntos: 5 },
    { sabor: "vainilla", puntos: 4 },
    { sabor: "chocolate", puntos: 3 },
    { sabor: "fresa", puntos: 5 },
    { sabor: "nata", puntos: 2 },
    { sabor: "chocolate", puntos: 4 },
    { sabor: "vainilla", puntos: 5 }
];

// Un solo event listener para todo el contenedor
document.querySelector(".voting-section").addEventListener('click', e => {
    
    // Si hicieron click en el botón Votar
    if (e.target.id === "voteBtn" || e.target.closest("#voteBtn")) {
        const sabor = document.querySelector("#flavorSelect").value;
        const puntosInput = document.querySelector("[name='rating']:checked");
        
        if (!sabor || sabor === "") {
            alert("Selecciona un sabor");
            return;
        }
        
        if (!puntosInput) {
            alert("Selecciona una puntuación");
            return;
        }
        
        const puntos = parseInt(puntosInput.value);
        votos.push({ sabor, puntos });
        alert(`Votado: ${sabor} - ${puntos} estrellas`);
        
        // Limpiar
        document.querySelector("#flavorSelect").selectedIndex = 0;
        document.querySelectorAll("[name='rating']").forEach(radio => {
            radio.checked = false;
        });
    }
    
    // Si hicieron click en el botón Ver Resultados
    if (e.target.id === "resultsBtn" || e.target.closest("#resultsBtn")) {
        if (votos.length === 0) {
            document.querySelector("#listado").innerHTML = "<p>No hay votos</p>";
            return;
        }
        
        const sabores = ["vainilla", "fresa", "chocolate", "nata"];
        let html = `
        <table border="1" width="100%">
            <thead>
                <tr>
                    <th>Sabor</th>
                    <th>Votos</th>
                    <th>Media</th>
                    <th>Veces 5 estrellas</th>
                </tr>
            </thead>
            <tbody>`;
        
        for (let i = 0; i < sabores.length; i++) {
            const sabor = sabores[i];
            let votosSabor = [];
            
            // Filtrar votos de este sabor
            for (let j = 0; j < votos.length; j++) {
                if (votos[j].sabor === sabor) {
                    votosSabor.push(votos[j]);
                }
            }
            
            if (votosSabor.length > 0) {
                let sumaPuntos = 0;
                let vecesMaximo = 0;
                
                for (let k = 0; k < votosSabor.length; k++) {
                    sumaPuntos += votosSabor[k].puntos;
                    if (votosSabor[k].puntos === 5) {
                        vecesMaximo++;
                    }
                }
                
                const media = (sumaPuntos / votosSabor.length).toFixed(2);
                
                html += `
                <tr>
                    <td>${sabor}</td>
                    <td>${votosSabor.length}</td>
                    <td>${media}</td>
                    <td>${vecesMaximo}</td>
                </tr>`;
            } else {
                html += `
                <tr>
                    <td>${sabor}</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>`;
            }
        }
        
        html += `</tbody></table>`;
        html += `<p><strong>Total votos: ${votos.length}</strong></p>`;
        document.querySelector("#listado").innerHTML = html;
    }
});