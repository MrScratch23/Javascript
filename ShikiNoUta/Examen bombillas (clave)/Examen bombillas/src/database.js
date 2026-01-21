import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function initDB() {
    const db = await open({
        filename: path.join(__dirname, '../database/datos.db'),
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS BOMBILLA (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            etiqueta TEXT NOT NULL,
            checksum TEXT
        );

        CREATE TABLE IF NOT EXISTS ESTADO (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            bombilla_id INTEGER NOT NULL,
            fecha TEXT NOT NULL,
            hora TEXT NOT NULL,
            encendido INTEGER NOT NULL,
            FOREIGN KEY (bombilla_id) REFERENCES BOMBILLA(id)
        );
    `);

    return db;
}
