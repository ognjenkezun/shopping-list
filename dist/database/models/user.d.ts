import mongoose from 'mongoose';
export interface UserDocument extends mongoose.Document {
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePasswords(candidatePassword: string): Promise<boolean>;
}
declare const User: mongoose.Model<UserDocument, {}, {}>;
export default User;
