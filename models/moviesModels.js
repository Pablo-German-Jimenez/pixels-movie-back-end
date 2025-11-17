import mongoose from 'mongoose';

const movieSchema = new Schema(
    {
        nameMovie: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 50,
            unique: true,
        },
        descriptionMovie:{
            type: String,
            required:true,
            minLength: 20,
            maxLength: 500, 
        }
    },
    {
        timestamps: true,
    }    
);

const Movie = mongoose.model('Movies', movieSchema);

export default Movie;