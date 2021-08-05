import { DocumentDefinition } from "mongoose";
import { ProductNameDocument } from "../database/models/product-name";
export declare const createProductNameService: (productName: DocumentDefinition<ProductNameDocument>) => Promise<ProductNameDocument>;
