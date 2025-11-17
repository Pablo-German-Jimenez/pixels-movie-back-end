import {Router} from 'express';
import { getMovie , postMovie } from '../controllers/movies.controllers.js';




const moviesRoutes = Router();

moviesRoutes.route('/').get(getMovie);
moviesRoutes.route('/').post(postMovie);


export default moviesRoutes;