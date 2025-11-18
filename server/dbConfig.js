import mongoose from "mongoose";    

try{
    mongoose.connect(process.env.MONGODB).then(()=>console.log('Conneced to MongoDB correctly'));
}catch(error){
    console.error(`Error to conection data base: ${error}`);
}

export default mongoose;