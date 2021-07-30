import mongoose from 'mongoose';
//import bcrypt from 'bcrypt';
// import config from 'config';

export interface UserDocument extends mongoose.Document {
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    
    comparePasswords(candidatePassword: string): Promise<boolean>;
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
  
    if (!user.isModified("password")) return next();
  
    // FROM .env
    // const salt = await bcrypt.genSalt(16);
    // const hash = await bcrypt.hash(user.password, salt);
    //user.password = hash;
    // await bcrypt.genSalt(16).then(async x => {
    //                 const hash = await bcrypt.hashSync(user.password, x);
    //                 user.password = hash;
  
    //                 return next();
    //             })
    //             .catch(err => {throw new Error(err)});
  
    // const hash = await bcrypt.hashSync(user.password, salt);
  
    // Replace the password with the hash
    // user.password = hash;
  
    return next();
});  

// UserSchema.methods.comparePasswords = async function (candidatePassword: string) {
//     const user = this as UserDocument;

//     return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
// }

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;