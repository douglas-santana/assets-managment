import mongoose from "mongoose";

const mongoConnection =
mongoose.connect('mongodb+srv://testeTS:testets123@cluster0.5lucr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

    .then((data) => {
        console.log('MongoDB Connection Succeeded', data.version);
    })

    .catch((err) => {
        console.log('Error in DB connection:', err.message);
    })

export { mongoConnection };