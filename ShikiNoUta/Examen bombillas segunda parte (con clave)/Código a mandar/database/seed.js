import { initDB } from '../src/database.js';

async function seed() {
    try {
        const db = await initDB();
        console.log('Database connected.');

        // Limpiar tablas existentes para evitar duplicados en pruebas
        await db.run('DELETE FROM ESTADO');
        await db.run('DELETE FROM BOMBILLA');
        // Resetear autoincrement
        await db.run('DELETE FROM sqlite_sequence WHERE name="BOMBILLA" OR name="ESTADO"');

        console.log('Tables cleared.');

        // Insertar Bombillas
        const b1 = await db.run('INSERT INTO BOMBILLA (etiqueta, checksum) VALUES (?, ?)', ['Luz Entrada', '+9988-AB']);
        const b2 = await db.run('INSERT INTO BOMBILLA (etiqueta, checksum) VALUES (?, ?)', ['Lámpara Salón', '-5678-ÉY']);
        const b3 = await db.run('INSERT INTO BOMBILLA (etiqueta, checksum) VALUES (?, ?)', ['Flexo Escritorio', '1122-EF']);

        console.log('Bombillas inserted.');

        // Insertar Estados para Bombilla 1 (3 estados)
        await db.run('INSERT INTO ESTADO (bombilla_id, fecha, hora, encendido) VALUES (?, ?, ?, ?)', [b1.lastID, '10/01/2026', '08:00', 1]);
        await db.run('INSERT INTO ESTADO (bombilla_id, fecha, hora, encendido) VALUES (?, ?, ?, ?)', [b1.lastID, '10/01/2026', '08:30', 0]);
        await db.run('INSERT INTO ESTADO (bombilla_id, fecha, hora, encendido) VALUES (?, ?, ?, ?)', [b1.lastID, '10/01/2026', '19:00', 1]);

        // Insertar Estados para Bombilla 2 (5 estados)
        await db.run('INSERT INTO ESTADO (bombilla_id, fecha, hora, encendido) VALUES (?, ?, ?, ?)', [b2.lastID, '08/01/2026', '20:00', 1]);
        await db.run('INSERT INTO ESTADO (bombilla_id, fecha, hora, encendido) VALUES (?, ?, ?, ?)', [b2.lastID, '09/01/2026', '21:00', 0]);
        await db.run('INSERT INTO ESTADO (bombilla_id, fecha, hora, encendido) VALUES (?, ?, ?, ?)', [b2.lastID, '09/01/2026', '21:05', 1]);
        await db.run('INSERT INTO ESTADO (bombilla_id, fecha, hora, encendido) VALUES (?, ?, ?, ?)', [b2.lastID, '09/01/2026', '23:30', 0]);
        await db.run('INSERT INTO ESTADO (bombilla_id, fecha, hora, encendido) VALUES (?, ?, ?, ?)', [b2.lastID, '10/01/2026', '07:00', 1]);

        // Bombilla 3 no tiene estados

        console.log('Estados inserted.');
        console.log('Seeding complete.');
        
    } catch (err) {
        console.error('Error seeding database:', err);
    }
}

seed();
