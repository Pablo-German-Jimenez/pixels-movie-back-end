import {Router} from 'express';
import moviesRoutes from './movie.routes.js';

const router = Router();

router.use('/movies', moviesRoutes);

export default router;
