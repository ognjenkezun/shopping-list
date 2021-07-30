import { DocumentDefinition } from "mongoose";
import ShoppingList, { ShoppingListDocument } from "../database/models/shopping-list";
import User, { UserDocument } from "../database/models/user";

export const createShoppingListService = async (shoppingList: DocumentDefinition<ShoppingListDocument>, userId: string) => {
    try {
        const findedUser = await User.findById(userId);
        if (findedUser) {
            shoppingList.userId = userId;
            const newShoppingList = await ShoppingList.create(shoppingList);
            return newShoppingList;
        }

        throw new Error("User not exist");
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteShoppingListService = async (user: DocumentDefinition<UserDocument>, id: any) => {
    try {
        const findedShoppingList = await ShoppingList.findById({ _id: id });

        if (findedShoppingList) {
            if (findedShoppingList.userId === user.id) {
                await ShoppingList.findOneAndDelete({ _id: id }, null, err => {
                    if(err) {
                        throw new Error(err.message);
                    }
                });
            }
            else {
                throw new Error("You can delete only your shopping list");
            }
        }
        else {
            throw new Error("Shopping list is not find");
        }

    } catch (error) {
        throw new Error(error);
    }
}

export const updateShoppingListService = async (user: DocumentDefinition<UserDocument>, id: any, shoppingList: DocumentDefinition<ShoppingListDocument>) => {
    try {
        const findedShoppingList = await ShoppingList.findById({ _id: id });

        if (findedShoppingList) {
            if (findedShoppingList.userId === user.id) {
                const updatedShoppingList = await ShoppingList.findOneAndUpdate({ _id: id }, { name: shoppingList.name, productList: shoppingList.productList }, {new: true}, err => {
                    if (err) {
                        throw new Error("Something wrong when updating data!");
                    }
                });

                return updatedShoppingList;
            }
            else {
                throw new Error("You can modify only your shopping list");
            }
        }
        else {
            throw new Error("Shopping list is not find");
        }

    } catch (error) {
        throw new Error(error);
    }
}

export const getShoppingListByIdService = async (id: any) => {
    try {
        return await ShoppingList.findById({ _id: id });
    } catch (error) {
        throw new Error(error);
    }
}

export const statisticShoppingListService = async (dateFrom: any, dateTo: any) => {
    try {
        return await ShoppingList.find({ });
    } catch (error) {
        throw new Error(error);
    }
}