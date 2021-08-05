import { Application } from 'express';
import { JWT } from '../middlewares/jwt'
import { createUser, loginUser, updateUser } from "../controllers/user";
import { createShoppingList, 
         deleteShoppingList, 
         getShoppingListById, 
         statisticShoppingList,
         updateShoppingList } from "../controllers/shopping-list";
import { createProduct, deleteProduct } from "../controllers/product";

export default (app: Application) => {
    const jwtMiddleware = new JWT().authenticate;

    app.post("/login", loginUser);
    app.post("/register", createUser);
    app.put("/users", jwtMiddleware, updateUser);
    
    app.post("/shopping-list", jwtMiddleware, createShoppingList);
    app.get("/shopping-list/statistic", jwtMiddleware, statisticShoppingList);
    app.get("/shopping-list/:id", jwtMiddleware, getShoppingListById);
    app.delete("/shopping-list/:id", jwtMiddleware, deleteShoppingList);
    app.put("/shopping-list/:id", jwtMiddleware, updateShoppingList);
    
    app.post("/product", jwtMiddleware, createProduct);
    app.delete("/product/:id", jwtMiddleware, deleteProduct);
}