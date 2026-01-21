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
    

    try {
        const bombilla = await BombillaModel.findById(id);
        
        if (!bombilla) {
            return res.status(404).json({ error: 'Bombilla no encontrada' });
        }

        let historialFormateado;

    // Lógica normal: obtener historial real de la BD
        const historial = await BombillaModel.findHistoryByBombillaId(id);

        historialFormateado = historial.map(h => ({
            fecha: h.fecha,
            hora: h.hora,
            encendido: h.encendido === 1
        }));


        res.json({
            id: bombilla.id,
            etiqueta: bombilla.etiqueta,
            checksum: bombilla.checksum, // Reemplaza al de la BD
            historial: historialFormateado
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los detalles de la bombilla' });
    }
};
