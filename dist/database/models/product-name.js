"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductNameSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
});
const ProductName = mongoose_1.default.model("ProductName", ProductNameSchema);
exports.default = ProductName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1uYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RhdGFiYXNlL21vZGVscy9wcm9kdWN0LW5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBZ0M7QUFNaEMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUN6QztJQUNJLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0NBQ3ZELENBQ0osQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFzQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUUxRixrQkFBZSxXQUFXLENBQUMifQ==