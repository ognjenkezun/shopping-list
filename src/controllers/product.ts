import { Request, Response } from "express";
import { createProductService, deleteProductService } from "../services/product";
import { MongooseHelper } from '../helpers/mongoose';

export const createProduct = async (req: Request, res: Response) => {
    try {
        const newProduct = await createProductService(req.body);
        if (newProduct) {
            return res.status(201).json(newProduct);
        }
        else {
            throw new Error("Product is not created");
        }
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const idString = req.params.id;
        const id = MongooseHelper.getIdObjectFromString(idString);
        if (id) {
            await deleteProductService(id);
            return res.status(200).json({ message: `Product ${idString} successfuly deleted!` });
        }

        return res.status(400).json({ message: "Please enter id" });
    } catch (e) {
        return res.status(500).send(e.message);
    }
}