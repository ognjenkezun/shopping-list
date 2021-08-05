"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../middlewares/jwt");
const user_1 = require("../controllers/user");
const shopping_list_1 = require("../controllers/shopping-list");
const product_1 = require("../controllers/product");
const product_name_1 = require("../controllers/product-name");
exports.default = (app) => {
    const jwtMiddleware = new jwt_1.JWT().authenticate;
    app.post("/login", user_1.loginUser);
    app.post("/register", user_1.createUser);
    app.put("/users", jwtMiddleware, user_1.updateUser);
    app.post("/shopping-list", jwtMiddleware, shopping_list_1.createShoppingList);
    app.get("/shopping-list/statistic", jwtMiddleware, shopping_list_1.statisticShoppingList);
    app.get("/shopping-list/:id", jwtMiddleware, shopping_list_1.getShoppingListById);
    app.delete("/shopping-list/:id", jwtMiddleware, shopping_list_1.deleteShoppingList);
    app.put("/shopping-list/:id", jwtMiddleware, shopping_list_1.updateShoppingList);
    app.post("/product", jwtMiddleware, product_1.createProduct);
    //Add middleware
    app.post("/product-name", product_name_1.createProductName);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw0Q0FBd0M7QUFDeEMsOENBQXdFO0FBQ3hFLGdFQUlrRTtBQUNsRSxvREFBdUQ7QUFDdkQsOERBQWdFO0FBRWhFLGtCQUFlLENBQUMsR0FBZ0IsRUFBRSxFQUFFO0lBQ2hDLE1BQU0sYUFBYSxHQUFHLElBQUksU0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBRTdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGdCQUFTLENBQUMsQ0FBQztJQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxpQkFBVSxDQUFDLENBQUM7SUFDbEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLGlCQUFVLENBQUMsQ0FBQztJQUU3QyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxrQ0FBa0IsQ0FBQyxDQUFDO0lBQzlELEdBQUcsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsYUFBYSxFQUFFLHFDQUFxQixDQUFDLENBQUM7SUFDMUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsbUNBQW1CLENBQUMsQ0FBQztJQUNsRSxHQUFHLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxrQ0FBa0IsQ0FBQyxDQUFDO0lBQ3BFLEdBQUcsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLGtDQUFrQixDQUFDLENBQUM7SUFFakUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLHVCQUFhLENBQUMsQ0FBQztJQUVuRCxnQkFBZ0I7SUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsZ0NBQWlCLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUEifQ==