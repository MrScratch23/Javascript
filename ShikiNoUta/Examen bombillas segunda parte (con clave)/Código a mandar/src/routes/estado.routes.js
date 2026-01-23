import { Router } from 'express';
import * as estadoController from '../controllers/estado.controller.js';

const router = Router();

router.post('/', estadoController.createEstado);

export default router;
