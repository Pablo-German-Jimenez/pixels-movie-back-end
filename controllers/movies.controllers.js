import Movie from "../models/Movie.js";

//controller get all movies :O
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find().toSorted({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: movies.length,
      data: movies,
    });
  } catch (error) {
    res.status(400).json({
      succees: false,
      message: "Error getting movie",
      error: error.message,
    });
  }
};

//controller get movie by id :P
export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie do not find",
      });
    }

    res.status(200).json({
      success: true,
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error to get movie by id",
      error: error.message,
    });
  }
};

// controller creator new movie :)
export const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);

    res.status(201).json({
      success: true,
      data: movie,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error create movie",
      error: error.message,
    });
  }
};

// controller delete movie :(

export const deleteMovie = async (req, res) => {
  try {
    const movieSearched = await Movie.findByIdAndDelete(req.params.id);
    if (!movieSearched) {
      return res.send(404).json({ message: `It doesnt found the products` });
    }
  } catch (error) {
    console.error(500);
  }
};

// Controller find by id movie and update :D

export const updateMovie = async (req, res) => {
  try {
    const movieFinded = await Movie.findByIdAndUpdate(req.params.id, req.body,{new:true});
    if (!movieFinded) {
      return res.status(404).json({ message: `Movie not found` });
    }
    res.status(200).json({ message: `Movie updated successfully` });
  } catch (error) {
    console.error(500);
    res.status(500).json({ message: `Error updating movie` });
  }
};
