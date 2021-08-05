import mongoose from 'mongoose';
import { UserDocument } from "./user";
import { ProductDocument } from './product';

export interface ShoppingListDocument extends mongoose.Document {
    name: string;
    userId: UserDocument["_id"];
    productList: [{
        productId: ProductDocument["_id"],
        productName: String,
        amount: Number
    }];
    createdAt: Date;
    updatedAt: Date;
}

const ShoppingListSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        productList: [{ 
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            productName: { type: String, required: true },
            amount: { type: Number, required: true }
        }]
    },
    { timestamps: true }
);

const ShoppingList = mongoose.model<ShoppingListDocument>("ShoppingList", ShoppingListSchema);

export default ShoppingList;
