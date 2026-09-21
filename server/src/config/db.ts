import mongoose from 'mongoose';

export const connectDB = async () : Promise<void>=>{
    try {
        const uri = process.env.MONGO_URI as string;
        await mongoose.connect(uri);
        console.log("MongoDb Connected");
        
    } catch (error) {
        if(error instanceof Error){
            console.error("Error Connecting to MongoDb", error.message);
        }
        else{
            console.error("Error Connecting to MongoDb", error);
        }
        process.exit(1);
    }
};