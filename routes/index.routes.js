import {Router} from 'express';
import moviesRoutes from './movie.routes.js';



const router = Router();

router.use('api/movies',moviesRoutes)
router.use('/createmovie', moviesRoutes);

export default router;


