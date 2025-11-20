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
    maxLength: 500,
    genre: {
      type: String,
      required: true,
      enum: [
        "Todos",
        "Acción",
        "Aventura",
        "Animación",
        "Comedia",
        "Crimen",
        "Documental",
        "Drama",
        "Familia",
        "Fantasía",
        "Historia",
        "Horror",
        "Música",
        "Misterio",
        "Romance",
        "Ciencia Ficción",
        "Película de TV",
        "Thriller",
        "Guerra",
        "Western",
      ],
    }},
    year: {
        type:Number,
        required:true,
        min:1900,
        max:new Date().getFullYear()
    },
    duration: {
        type: Number,
        required:true,
        min:0,
        max:10
    },
    minutes: {
        type:Number,
        required:true,
        min:0,
        max:59
    },
    seconds: {
        type:Number,
        default:0,
        max:59
    },
    imageUrl:{
        type:String,
        required:true
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
  }
},
{timestamps:true});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;