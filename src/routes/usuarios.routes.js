import { Router } from 'express';

const router = Router();
import * as usuariosCtrl from '../controllers/usuarios.controller'

router.get('/', usuariosCtrl.getUsuarios);
router.post('/', usuariosCtrl.crearUsuarios);

export default router;