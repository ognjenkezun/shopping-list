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
exports.createProductNameService = void 0;
const product_name_1 = __importDefault(require("../database/models/product-name"));
const createProductNameService = (productName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProductName = yield product_name_1.default.create(productName);
        return newProductName;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createProductNameService = createProductNameService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1uYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL3Byb2R1Y3QtbmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtRkFBbUY7QUFFNUUsTUFBTSx3QkFBd0IsR0FBRyxDQUFPLFdBQW9ELEVBQUUsRUFBRTtJQUNuRyxJQUFJO1FBQ0EsTUFBTSxjQUFjLEdBQUcsTUFBTSxzQkFBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxPQUFPLGNBQWMsQ0FBQztLQUN6QjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBUFksUUFBQSx3QkFBd0IsNEJBT3BDIn0=