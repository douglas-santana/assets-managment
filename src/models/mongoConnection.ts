import mongoose from "mongoose";
import 'dotenv/config';

const PASS_MONGO_ATLAS = process.env.PASS_MONGO_ATLAS;

const mongoConnection =
mongoose.connect(`mongodb+srv://testeTS:${PASS_MONGO_ATLAS}@cluster0.5lucr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)

    .then((data) => {
        console.log('MongoDB Connection Succeeded', data.version);
    })

    .catch((err) => {
        console.log('Error in DB connection:', err.message);
    })

export { mongoConnection };