"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connect = () => {
    const dbUri = "mongodb://localhost:27017/shopping-list";
    return mongoose_1.default.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
        .then(() => {
        console.log("Database connected");
    })
        .catch((error) => {
        console.log("DB error ", error);
    });
};
exports.connect = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9jb25uZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdEQUFnQztBQUV6QixNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7SUFDeEIsTUFBTSxLQUFLLEdBQUcseUNBQXlDLENBQUM7SUFFeEQsT0FBTyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7UUFDNUIsZUFBZSxFQUFFLElBQUk7UUFDckIsa0JBQWtCLEVBQUUsSUFBSTtRQUN4QixjQUFjLEVBQUUsSUFBSTtLQUN0QixDQUFDO1NBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBO0FBZFksUUFBQSxPQUFPLFdBY25CIn0=