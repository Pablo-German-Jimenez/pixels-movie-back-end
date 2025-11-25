import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  nameMovie: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
    unique: true,
  },
  descriptionMovie: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 500},
    genre:[
      {type:String,
        required:true,
        enum:[
                "All",
      "Action",
      "Adventure",
      "Animation",
      "Comedy",
      "Crimen",
      "Documental",
      "Drama",
      "Family",
      "Fantasy",
      "History",
      "Horror",
      "Music",
      "Mistery",
      "Romance",
      "Sciencie Fiction",
      "Tv Movie",
      "Thriller",
      "War",
      "Western"
        ]
      }
    ]
,
    year: {
        type:Number,
        required:true,
        min:1888,
        max:new Date().getFullYear()
    },
    duration: {
        type: Number,
        required:true,
        min:1,
        max:600
    },
    imageUrl:{
        type:String,
        required:true,
         validate:{
        validator: (valor)=>{ 
            return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(valor)}
        }
    },
    videoUrl:{
        type:String,
        required:true    
  },
  rating:{
    type:Number,
    default:0,
    min:0,
    max:10
  }},
{timestamps:true});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;