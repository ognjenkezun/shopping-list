import mongoose from 'mongoose';
import { UserDocument } from "./user";
import Product, { ProductDocument } from './product';

export interface ShoppingListDocument extends mongoose.Document {
    name: string;
    userId: UserDocument["_id"];
    productList: ProductDocument["_id"][];
    // productList: [{
    //     name: string;
    //     amount: number
    // }];
    createdAt: Date;
    updatedAt: Date;
}

const ShoppingListSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        //productList: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }
        productList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
        // productList: [{
        //     name: { type: String },
        //     amount: { type: Number }
        // }]
    },
    { timestamps: true }
);

const ShoppingList = mongoose.model<ShoppingListDocument>("ShoppingList", ShoppingListSchema);

export default ShoppingList;
