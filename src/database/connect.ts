import mongoose from 'mongoose';

export const connect = () => {
    const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/shopping-list';

    return mongoose.connect(dbUri, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true 
    })
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.log("DB error ", error);
    });
}