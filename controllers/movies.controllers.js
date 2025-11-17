import Movie from "../models/moviesModels.js";

export const createMovie = async (req,res)=>{
    try{
        const newMovie = new Movie(req.movie)
        console.log(newMovie)
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Something went wrong'})
    }
}


export const getMovie = async (req,res)=>{
    try{
       console.log('from get movie controller')
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Something went wrong'})
    }
}