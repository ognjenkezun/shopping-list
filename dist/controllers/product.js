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
exports.createProduct = void 0;
const product_1 = require("../services/product");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = yield product_1.createProductService(req.body);
        if (newProduct) {
            return res.status(201).json(newProduct);
        }
        else {
            throw new Error("Product is not created");
        }
    }
    catch (e) {
        return res.status(409).send(e.message);
    }
});
exports.createProduct = createProduct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLGlEQUEyRDtBQUVwRCxNQUFNLGFBQWEsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMvRCxJQUFJO1FBQ0EsTUFBTSxVQUFVLEdBQUcsTUFBTSw4QkFBb0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxVQUFVLEVBQUU7WUFDWixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNDO2FBQ0k7WUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDN0M7S0FDSjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUM7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQVpZLFFBQUEsYUFBYSxpQkFZekIifQ==