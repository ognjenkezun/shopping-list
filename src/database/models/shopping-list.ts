import mongoose from 'mongoose';
import { UserDocument } from "./user";
import { ProductDocument } from './product';

export interface ShoppingListDocument extends mongoose.Document {
    name: string;
    userId: UserDocument["_id"];
    productList: ProductDocument["_id"][];
    createdAt: Date;
    updatedAt: Date;
}

const ShoppingListSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        productList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
    },
    { timestamps: true }
);

const ShoppingList = mongoose.model<ShoppingListDocument>("ShoppingList", ShoppingListSchema);

export default ShoppingList;
