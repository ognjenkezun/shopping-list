"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticShoppingListService = exports.getShoppingListByIdService = exports.updateShoppingListService = exports.deleteShoppingListService = exports.createShoppingListService = void 0;
const shopping_list_1 = __importDefault(require("../database/models/shopping-list"));
const user_1 = __importDefault(require("../database/models/user"));
const createShoppingListService = (shoppingList, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findedUser = yield user_1.default.findById(userId);
        if (findedUser) {
            shoppingList.userId = userId;
            const newShoppingList = yield shopping_list_1.default.create(shoppingList);
            return newShoppingList;
        }
        throw new Error("User not exist");
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createShoppingListService = createShoppingListService;
const deleteShoppingListService = (user, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findedShoppingList = yield shopping_list_1.default.findById({ _id: id });
        if (findedShoppingList) {
            if (findedShoppingList.userId === user.id) {
                yield shopping_list_1.default.findOneAndDelete({ _id: id }, null, err => {
                    if (err) {
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
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deleteShoppingListService = deleteShoppingListService;
const updateShoppingListService = (user, id, shoppingList) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findedShoppingList = yield shopping_list_1.default.findById({ _id: id });
        if (findedShoppingList) {
            if (findedShoppingList.userId === user.id) {
                const updatedShoppingList = yield shopping_list_1.default.findOneAndUpdate({ _id: id }, { name: shoppingList.name, productList: shoppingList.productList }, { new: true }, err => {
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
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.updateShoppingListService = updateShoppingListService;
const getShoppingListByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield shopping_list_1.default.findById({ _id: id });
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getShoppingListByIdService = getShoppingListByIdService;
const statisticShoppingListService = (dateFrom, dateTo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield shopping_list_1.default.find({});
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.statisticShoppingListService = statisticShoppingListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9zaG9wcGluZy1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFGQUFzRjtBQUN0RixtRUFBNkQ7QUFFdEQsTUFBTSx5QkFBeUIsR0FBRyxDQUFPLFlBQXNELEVBQUUsTUFBYyxFQUFFLEVBQUU7SUFDdEgsSUFBSTtRQUNBLE1BQU0sVUFBVSxHQUFHLE1BQU0sY0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLFVBQVUsRUFBRTtZQUNaLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQzdCLE1BQU0sZUFBZSxHQUFHLE1BQU0sdUJBQVksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDaEUsT0FBTyxlQUFlLENBQUM7U0FDMUI7UUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDckM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUI7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQWJZLFFBQUEseUJBQXlCLDZCQWFyQztBQUVNLE1BQU0seUJBQXlCLEdBQUcsQ0FBTyxJQUFzQyxFQUFFLEVBQU8sRUFBRSxFQUFFO0lBQy9GLElBQUk7UUFDQSxNQUFNLGtCQUFrQixHQUFHLE1BQU0sdUJBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVwRSxJQUFJLGtCQUFrQixFQUFFO1lBQ3BCLElBQUksa0JBQWtCLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLE1BQU0sdUJBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxD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