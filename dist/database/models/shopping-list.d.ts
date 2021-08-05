import mongoose from 'mongoose';
import { UserDocument } from "./user";
import { ProductDocument } from './product';
export interface ShoppingListDocument extends mongoose.Document {
    name: string;
    userId: UserDocument["_id"];
    productList: [
        {
            productId: ProductDocument["_id"];
            productName: String;
            amount: Number;
        }
    ];
    createdAt: Date;
    updatedAt: Date;
}
declare const ShoppingList: mongoose.Model<ShoppingListDocument, {}, {}>;
export default ShoppingList;
