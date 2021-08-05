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
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticShoppingList = exports.updateShoppingList = exports.getShoppingListById = exports.deleteShoppingList = exports.createShoppingList = void 0;
const shopping_list_1 = require("../services/shopping-list");
const mongoose_1 = require("../helpers/mongoose");
const createShoppingList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shoppingList = yield shopping_list_1.createShoppingListService(req.body, req.body.user.id);
        return res.status(201).json(shoppingList);
    }
    catch (e) {
        return res.status(409).send(e.message);
    }
});
exports.createShoppingList = createShoppingList;
const deleteShoppingList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idString = req.params.id;
        const id = mongoose_1.MongooseHelper.getIdObjectFromString(idString);
        if (id) {
            yield shopping_list_1.deleteShoppingListService(req.body.user, id);
            return res.status(200).json({ message: `Shopping list ${idString} successfuly deleted!` });
        }
        return res.status(400).json({ message: "Please enter id" });
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
});
exports.deleteShoppingList = deleteShoppingList;
const getShoppingListById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idString = req.params.id;
        const id = mongoose_1.MongooseHelper.getIdObjectFromString(idString);
        if (id) {
            const shoppingList = yield shopping_list_1.getShoppingListByIdService(id);
            if (!shoppingList) {
                throw new Error("No shopping list found!");
            }
            return res.status(200).json(shoppingList);
        }
        return res.status(400).json({ message: "Please enter id" });
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
});
exports.getShoppingListById = getShoppingListById;
const updateShoppingList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idString = req.params.id;
        const id = mongoose_1.MongooseHelper.getIdObjectFromString(idString);
        const shoppingList = req.body;
        if (id) {
            const updatedShoppingList = yield shopping_list_1.updateShoppingListService(req.body.user, id, shoppingList);
            if (!updatedShoppingList) {
                throw new Error("No shopping list found!");
            }
            return res.status(200).json(updatedShoppingList);
        }
        return res.status(400).json({ message: "Please enter id" });
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
});
exports.updateShoppingList = updateShoppingList;
const statisticShoppingList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { dateFrom, dateTo } = req.body;
        if (dateFrom != null && dateTo != null) {
            const shoppingList = yield shopping_list_1.statisticShoppingListService(dateFrom, dateTo);
            if (!shoppingList) {
                throw new Error("No shopping list found!");
            }
            return res.status(200).json(shoppingList);
        }
        else {
            return res.status(400).json({ message: "Please enter DateFrom and DateTo" });
        }
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
});
exports.statisticShoppingList = statisticShoppingList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9zaG9wcGluZy1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDZEQUlzRTtBQUN0RSxrREFBb0Q7QUFFN0MsTUFBTSxrQkFBa0IsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNwRSxJQUFJO1FBQ0EsTUFBTSxZQUFZLEdBQUcsTUFBTSx5Q0FBeUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDN0M7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFDO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFQWSxRQUFBLGtCQUFrQixzQkFPOUI7QUFFTSxNQUFNLGtCQUFrQixHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3BFLElBQUk7UUFDQSxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMvQixNQUFNLEVBQUUsR0FBRyx5QkFBYyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFELElBQUksRUFBRSxFQUFFO1lBQ0osTUFBTSx5Q0FBeUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixR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