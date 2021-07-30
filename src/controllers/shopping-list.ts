import { Request, Response } from "express";
import { createShoppingListService,
         deleteShoppingListService, 
         getShoppingListByIdService, 
         statisticShoppingListService,
         updateShoppingListService } from "../services/shopping-list";
import { MongooseHelper } from '../helpers/mongoose'

export const createShoppingList = async (req: Request, res: Response) => {
    try {
        const shoppingList = await createShoppingListService(req.body, req.body.user.id);
        return res.status(201).json(shoppingList);
    } catch (e) {
        return res.status(409).send(e.message);
    }
}

export const deleteShoppingList = async (req: Request, res: Response) => {
    try {
        const idString = req.params.id;
        const id = MongooseHelper.getIdObjectFromString(idString);
        if (id) {
            await deleteShoppingListService(req.body.user, id);
            return res.status(200).json({ message: `Shopping list ${idString} successfuly deleted!` });
        }

        return res.status(400).json({ message: "Please enter id" });
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

export const getShoppingListById = async (req: Request, res: Response) => {
    try {
        const idString = req.params.id;
        const id = MongooseHelper.getIdObjectFromString(idString);
        if (id) {
            const shoppingList = await getShoppingListByIdService(id);
            if(!shoppingList) {
                throw new Error("No shopping list found!")
            }
            return res.status(200).json(shoppingList);
        }

        return res.status(400).json({ message: "Please enter id" });
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

export const updateShoppingList = async (req: Request, res: Response) => {
    try {
        const idString = req.params.id;
        const id = MongooseHelper.getIdObjectFromString(idString);
        const shoppingList = req.body;

        if (id) {
            const updatedShoppingList = await updateShoppingListService(req.body.user, id, shoppingList);
            if(!updatedShoppingList) {
                throw new Error("No shopping list found!")
            }
            return res.status(200).json(updatedShoppingList);
        }

        return res.status(400).json({ message: "Please enter id" });
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

export const statisticShoppingList = async (req: Request, res: Response) => {
    try {
        const { dateFrom, dateTo } = req.body;

        if (dateFrom != null && dateTo != null) {
            const shoppingList = await statisticShoppingListService(dateFrom, dateTo);
            if(!shoppingList) {
                throw new Error("No shopping list found!")
            }
            return res.status(200).json(shoppingList);
        }
        else {
            return res.status(400).json({ message: "Please enter DateFrom and DateTo" });
        }
    } catch (e) {
        return res.status(500).send(e.message);
    }
}