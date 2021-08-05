import { DocumentDefinition } from "mongoose";
import { UserDocument } from "../database/models/user";
export declare const createUserService: (user: DocumentDefinition<UserDocument>) => Promise<UserDocument>;
export declare const loginUserService: (email: string, password: string) => Promise<string>;
export declare const updateUserService: (user: DocumentDefinition<UserDocument>, email: string, password: string) => Promise<UserDocument>;
