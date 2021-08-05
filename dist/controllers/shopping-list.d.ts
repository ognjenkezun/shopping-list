import { Request, Response } from "express";
export declare const createShoppingList: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteShoppingList: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getShoppingListById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateShoppingList: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const statisticShoppingList: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
