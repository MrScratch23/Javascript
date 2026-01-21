// Datos de respaldo en caso de que falle la API
export const datosPortes = {
    fecha: "07/03/2025",
    portes: [
        {
            especial: true,
            contenedores: [
                { tipo: "palé", mercancia: "fruta", producto: "Melón" },
                { tipo: "palé", mercancia: "fruta", producto: "Sandía" },
                { tipo: "box", mercancia: "verdura", producto: "Calabacín" }
            ]
        },
        {
            especial: false,
            contenedores: [
                { tipo: "box", mercancia: "fruta", producto: "Manzanas" },
                { tipo: "box", mercancia: "fruta", producto: "Peras" }
            ]
        }
    ]
};