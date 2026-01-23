import { EstadoModel } from '../models/estado.model.js';

export const createEstado = async (req, res) => {
    // Simulación de fallo aleatorio (15% de probabilidad)
    if (Math.random() < 0.15) {
        return res.status(500).json({ error: 'Error interno, no se pudo registrar el nuevo estado' });
    }

    const { bombilla_id, fecha, hora, encendido } = req.body;

    // Validación básica
    if (!bombilla_id || !fecha || !hora || encendido === undefined) {
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    try {
        const nuevoEstado = await EstadoModel.create({ bombilla_id, fecha, hora, encendido });
        res.status(201).json(nuevoEstado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el estado' });
    }
};
