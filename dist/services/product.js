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
exports.createProductService = void 0;
const product_1 = __importDefault(require("../database/models/product"));
const createProductService = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = yield product_1.default.create(product);
        return newProduct;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createProductService = createProductService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlFQUFzRTtBQUUvRCxNQUFNLG9CQUFvQixHQUFHLENBQU8sT0FBNEMsRUFBRSxFQUFFO0lBQ3ZGLElBQUk7UUFDQSxNQUFNLFVBQVUsR0FBRyxNQUFNLGlCQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELE9BQU8sVUFBVSxDQUFDO0tBQ3JCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDWixNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFQWSxRQUFBLG9CQUFvQix3QkFPaEMifQ==