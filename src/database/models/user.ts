import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserDocument extends mongoose.Document {
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    { timestamps: true }
);

UserSchema.pre("save", async function (next: mongoose.HookNextFunction) {
    let user = this as UserDocument;
  
    if (!user.isModified("password")) 
        return next();
  
    const salt = await bcrypt.genSalt(16);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  
    return next();
});  

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;