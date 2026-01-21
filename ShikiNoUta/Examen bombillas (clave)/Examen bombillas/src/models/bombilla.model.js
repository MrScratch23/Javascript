import { initDB } from '../database.js';

export class BombillaModel {
    static async findAll() {
        const db = await initDB();
        return db.all('SELECT * FROM BOMBILLA');
    }

    static async findById(id) {
        const db = await initDB();
        return db.get('SELECT * FROM BOMBILLA WHERE id = ?', [id]);
    }

    static async findHistoryByBombillaId(id) {
        const db = await initDB();
        // Obtener historial ordenado cronológicamente (ASC) como se pidió
        return db.all('SELECT fecha, hora, encendido FROM ESTADO WHERE bombilla_id = ? ORDER BY id ASC', [id]);
    }
}
