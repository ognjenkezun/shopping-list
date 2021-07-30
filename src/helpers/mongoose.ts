import mongoose from 'mongoose';

export class MongooseHelper {
    static getIdObjectFromString = (str: string) => {
        return mongoose.Types.ObjectId(str);
    }
}