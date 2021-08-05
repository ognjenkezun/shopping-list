import { DocumentDefinition } from "mongoose";
import { ProductDocument } from "../database/models/product";
export declare const createProductService: (product: DocumentDefinition<ProductDocument>) => Promise<ProductDocument>;
