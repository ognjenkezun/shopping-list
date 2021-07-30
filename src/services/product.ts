import { DocumentDefinition, FilterQuery } from "mongoose";
import ShoppingList, { ShoppingListDocument } from "../database/models/shopping-list";
import Product, { ProductDocument } from "../database/models/product";

export const createProductService = async (product: DocumentDefinition<ProductDocument>) => {
    try {
        const newProduct = await Product.create(product);
        return newProduct;
    } catch (error) {
        throw new Error(error);
    }
}