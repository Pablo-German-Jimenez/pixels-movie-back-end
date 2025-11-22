import {Router} from 'express';
import { createMovie, getAllMovies , getMovieById} from '../controllers/movies.controllers.js';


const moviesRoutes = Router();

moviesRoutes.get('/', getAllMovies);
moviesRoutes.get('/:id', getMovieById);
moviesRoutes.post('/',createMovie);



export default moviesRoutes;