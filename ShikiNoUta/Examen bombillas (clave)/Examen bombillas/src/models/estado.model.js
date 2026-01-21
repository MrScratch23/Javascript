import { initDB } from '../database.js';

export class EstadoModel {
    static async create(estadoData) {
        const { bombilla_id, fecha, hora, encendido } = estadoData;
        const db = await initDB();
        
        // Convertir boolean encendido a integer (0/1) para SQLite
        const encendidoInt = encendido ? 1 : 0;

        const result = await db.run(
            'INSERT INTO ESTADO (bombilla_id, fecha, hora, encendido) VALUES (?, ?, ?, ?)',
            [bombilla_id, fecha, hora, encendidoInt]
        );

        return {
            id: result.lastID,
            bombilla_id,
            fecha,
            hora,
            encendido
        };
    }
}
