import {Router} from 'express';
import { createMovie, getAllMovies , getMovieById, updateMovie} from '../controllers/movies.controllers.js';


const moviesRoutes = Router();

moviesRoutes('/').get(getAllMovies)//other way to write: with get method
moviesRoutes('/:id', getMovieById)
moviesRoutes.post('/',createMovie);//way to write: with post method
moviesRoutes('/:id').put(updateMovie)


export default moviesRoutes;