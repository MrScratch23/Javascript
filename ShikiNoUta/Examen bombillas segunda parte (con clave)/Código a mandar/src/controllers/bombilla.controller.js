import { BombillaModel } from '../models/bombilla.model.js';

export const getAllBombillas = async (req, res) => {
    // Simulación de fallo aleatorio (15% de probabilidad)
    if (Math.random() < 0.15) {
        return res.status(500).json({ error: 'Error interno, no se pudieron recuperar las bombillas' });
    }

    try {
        const bombillas = await BombillaModel.findAll();
        res.json(bombillas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las bombillas' });
    }
};

export const getBombillaById = async (req, res) => {
    const { id } = req.params;

    // Simulación de fallo aleatorio (15% de probabilidad)
    if (Math.random() < 0.15) {
        return res.status(500).json({ error: 'Error interno, no se pudo recuperar la bombilla ' +id });
    }
    
    // Lista de checksums para simulación
    const checksums = [
        "4579-ÂC","-1122-t4","1123","9876-aa", // Los 4 que provocan el historial corrupto
        "+1234-XC","5678-ÉY","-5678-UK","1456-FÓ","1234-TY","+1331-YY",
        "6661-FT","-3456-YU","+1534-FC","7579-GÚ","-1222-TI","5178-ÉY",
        "-5274-TE","5235-TA","8456-SÓ","3534-UU","+4325-YA","9661-OT",
        "-4444-YU","1122-EF","-5678-ÉY","+9988-AB","9988-LO","+9999-TR",
        "-4561-ÍÍ","+7777-EÍ","7171-RE","3431-RR"
    ];

    try {
        const bombilla = await BombillaModel.findById(id);
        
        if (!bombilla) {
            return res.status(404).json({ error: 'Bombilla no encontrada' });
        }

        // Selección aleatoria del checksum
        const randomIndex = Math.floor(Math.random() * checksums.length);
        const randomChecksum = checksums[randomIndex];

        let historialFormateado;

        // Si es uno de los 4 primeros valores, devolvemos el historial "corrupto"
        if (randomIndex < 4) {
            historialFormateado = [{
                fecha: "50/12/2056",
                hora: "33:33",
                encendido: true
            }];
        } else {
            // Lógica normal: obtener historial real de la BD
            const historial = await BombillaModel.findHistoryByBombillaId(id);
            
            historialFormateado = historial.map(h => ({
                fecha: h.fecha,
                hora: h.hora,
                encendido: h.encendido === 1
            }));
        }

        res.json({
            id: bombilla.id,
            etiqueta: bombilla.etiqueta,
            checksum: randomChecksum, // Reemplaza al de la BD
            historial: historialFormateado
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los detalles de la bombilla' });
    }
};
