import mongoose from 'mongoose';
export interface ProductNameDocument extends mongoose.Document {
    name: string;
}
declare const ProductName: mongoose.Model<ProductNameDocument, {}, {}>;
export default ProductName;
