import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bombillaRoutes from './routes/bombilla.routes.js';
import estadoRoutes from './routes/estado.routes.js';
import { initDB } from './database.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 7000;

// Initialize Database
try {
    await initDB();
    console.log('Database initialized successfully');
} catch (err) {
    console.error('Failed to initialize database:', err);
}

app.use(express.json());

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.use('/api/bombilla', bombillaRoutes);
app.use('/api/estado', estadoRoutes);

// Catch 404 for API routes
app.use('/api', (req, res) => {
    res.status(404).json({ error: 'API endpoint not found' });
});

// Catch-all for non-API routes (serves 404.html)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});