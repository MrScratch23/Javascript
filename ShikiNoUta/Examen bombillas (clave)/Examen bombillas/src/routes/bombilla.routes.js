import { Router } from 'express';
import * as bombillaController from '../controllers/bombilla.controller.js';

const router = Router();

router.get('/', bombillaController.getAllBombillas);
router.get('/:id', bombillaController.getBombillaById);

export default router;
