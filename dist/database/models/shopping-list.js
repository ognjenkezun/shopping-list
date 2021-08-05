"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ShoppingListSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    productList: [{
            productId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Product', required: true },
            productName: { type: String, required: true },
            amount: { type: Number, required: true }
        }]
}, { timestamps: true });
const ShoppingList = mongoose_1.default.model("ShoppingList", ShoppingListSchema);
exports.default = ShoppingList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvc2hvcHBpbmctbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUFnQztBQWlCaEMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUMxQztJQUNJLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQ3BELE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7SUFDN0QsV0FBVyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsa0JBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFDbkYsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1lBQzdDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtTQUMzQyxDQUFDO0NBQ0wsRUFDRCxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FDdkIsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUF1QixjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUU5RixrQkFBZSxZQUFZLENBQUMifQ==