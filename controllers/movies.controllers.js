import Movie from "../models/Movie.js";


//controller get all movies
export const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find().toSorted({createdAt:-1});
        res.status(200).json(
            {
                success:true,
                count: movies.length,
                data:movies
            }
        )}catch(error){
            res.status(400).json({
                succees:false,
                message:'Error getting movie',
                error:error.message
            });
        }}


        //controller get movie by id
        export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    
    if (!movie) {
      return res.status(404).json({
        success: false,
        message: 'Movie do not find'
      });
    }
    
    res.status(200).json({
      success: true,
      data: movie
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error to get movie by id',
      error: error.message
    });
  }
};

// controller creator new movie
export const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    
    res.status(201).json({
      success: true,
      data: movie
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error create movie',
      error: error.message
    });
  }
};