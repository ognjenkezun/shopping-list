import mongoose from 'mongoose';

export interface ProductDocument extends mongoose.Document {
    name: string;
}

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true }
    }
);

const Product = mongoose.model<ProductDocument>("Product", ProductSchema);

export default Product;