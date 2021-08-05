import { DocumentDefinition } from "mongoose";
import Product, { ProductDocument } from "../database/models/product";

export const createProductService = async (product: DocumentDefinition<ProductDocument>) => {
    try {
        const newProduct = await Product.create(product);
        return newProduct;
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteProductService = async (id: any) => {
    try {
        const findedProduct = await Product.findById({ _id: id });

        if (findedProduct) {
            await Product.deleteOne({ _id: id }, err => {
                if(err) {
                    throw new Error(err.message);
                }
            });
        }
        else {
            throw new Error("Product is not find");
        }

    } catch (error) {
        throw new Error(error);
    }
}