import { DocumentDefinition } from "mongoose";
import { ShoppingListDocument } from "../database/models/shopping-list";
import { UserDocument } from "../database/models/user";
export declare const createShoppingListService: (shoppingList: DocumentDefinition<ShoppingListDocument>, userId: string) => Promise<ShoppingListDocument>;
export declare const deleteShoppingListService: (user: DocumentDefinition<UserDocument>, id: any) => Promise<void>;
export declare const updateShoppingListService: (user: DocumentDefinition<UserDocument>, id: any, shoppingList: DocumentDefinition<ShoppingListDocument>) => Promise<ShoppingListDocument | null>;
export declare const getShoppingListByIdService: (id: any) => Promise<ShoppingListDocument | null>;
export declare const statisticShoppingListService: (dateFrom: any, dateTo: any) => Promise<ShoppingListDocument[]>;
