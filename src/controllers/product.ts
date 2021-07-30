import { Request, Response } from "express";
import { createProductService } from "../services/product";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const newProduct = await createProductService(req.body);
        if (newProduct) {
            return res.status(201).json(newProduct);
        }
        else {
            throw new Error("User is not created");
        }
    } catch (e) {
        return res.status(409).send(e.message);
    }
}