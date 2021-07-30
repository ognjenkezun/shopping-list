import mongoose from 'mongoose';
import { ShoppingListDocument } from './shopping-list';

export interface ProductDocument extends mongoose.Document {
    name: string;
    amount: number;
    shoppingList: ShoppingListDocument["_id"][];
}

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        amount: { type: String, required: true },
        shoppingList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ShoppingList' }]
    }
);

const Product = mongoose.model<ProductDocument>("Product", ProductSchema);

export default Product;