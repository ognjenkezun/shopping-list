import { DocumentDefinition } from "mongoose";
import bcrypt from 'bcrypt';
import User, { UserDocument } from "../database/models/user";
import { JWT } from "../middlewares/jwt";

export const createUserService = async (user: DocumentDefinition<UserDocument>) => {
    try {
        return await User.create(user);
    } catch (error) {
        throw new Error(error);
    }
}

export const loginUserService = async (email: string, password: string) => {
    try {
        const loggedUser = await User.findOne({ email });

        if (loggedUser) {
            const isValid = await bcrypt.compare(password, loggedUser.password);
            if (isValid) {
                return new JWT().sign({ id: loggedUser.id, email: loggedUser.email });
            }
            throw new Error("Password is not correct");
        }

        return "";
    } catch (error) {
        throw new Error(error);
    }
}

export const updateUserService = async (user: DocumentDefinition<UserDocument>, email: string, password: string) => {
    try {
        const salt = await bcrypt.genSalt(16);
        const hash = await bcrypt.hashSync(password, salt);

        password = hash;
        
        const userFound = await User.findOneAndUpdate({ email }, { password }, {new: true}, (err, doc) => {
            if (err) {
                throw new Error("Something wrong when updating data!");
            }
        });

        if (userFound) {
            if (user.id == userFound.id) {
                return userFound;
            }

            throw new Error("You can only modify your profile");
        }

        throw new Error("User not found");
    } catch (error) {
        throw new Error(error);
    }
}