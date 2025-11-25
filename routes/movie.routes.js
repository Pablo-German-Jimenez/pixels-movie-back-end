import {Router} from 'express';
import { createMovie, getAllMovies , getMovieById, updateMovie} from '../controllers/movies.controllers.js';


const moviesRoutes = Router();

moviesRoutes.get('/',getAllMovies);
moviesRoutes.get('/:id', getMovieById);
moviesRoutes.post('/',createMovie);
moviesRoutes.put('/:id',updateMovie);


export default moviesRoutes;