import {Router} from 'express';
import moviesRoutes from  './movies.routes.js';

const router = Router();

router.use('/productos', moviesRoutes);

export default router;
