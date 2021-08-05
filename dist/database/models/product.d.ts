import mongoose from 'mongoose';
export interface ProductDocument extends mongoose.Document {
    name: string;
}
declare const Product: mongoose.Model<ProductDocument, {}, {}>;
export default Product;
