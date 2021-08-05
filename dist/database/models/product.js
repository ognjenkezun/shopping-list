"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true }
    // amount: { type: String, required: true },
    // shoppingList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ShoppingList' }],
    // productName: { type: String, ref: 'ProductName', required: true }
});
const Product = mongoose_1.default.model("Product", ProductSchema);
exports.default = Product;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvcHJvZHVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUFnQztBQVdoQyxNQUFNLGFBQWEsR0FBRyxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUNyQztJQUNJLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQ3BELDRDQUE0QztJQUM1QyxpRkFBaUY7SUFDakYsb0VBQW9FO0NBQ3ZFLENBQ0osQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFrQixTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFMUUsa0JBQWUsT0FBTyxDQUFDIn0=