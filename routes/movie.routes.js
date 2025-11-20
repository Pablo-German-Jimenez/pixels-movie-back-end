import {Router} from 'express';
import { createMovie, getMovie} from '../controllers/movies.controllers.js';




const moviesRoutes = Router();

moviesRoutes.route('/').get(getMovie);
moviesRoutes.route('/').post(createMovie);


export default moviesRoutes;