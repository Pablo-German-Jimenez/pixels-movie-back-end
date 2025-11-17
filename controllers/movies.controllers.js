
/*export const createMovie = async (req,res)=>{
    try{
        const newMovie = new Movie(req.movie)
        console.log(newMovie)
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Something went wrong'})
    }
}*/


export const getMovie = async (req,res)=>{
    try{
       console.log('from get movie controller')
       res.send(`The server is working properly`)
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Something went wrong'})
    }
}

export const postMovie = async (req,res)=>{
    try{
         console.log('from post movie controller')
         res.send(`Post movie works`)
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Something went wrong'})
    }
}