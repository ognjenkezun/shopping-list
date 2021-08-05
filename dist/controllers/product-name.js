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
exports.createProductName = void 0;
const product_name_1 = require("../services/product-name");
const createProductName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProductName = yield product_name_1.createProductNameService(req.body);
        if (newProductName) {
            return res.status(201).json(newProductName);
        }
        else {
            throw new Error("Product name is not created");
        }
    }
    catch (e) {
        return res.status(409).send(e.message);
    }
});
exports.createProductName = createProductName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1uYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3Byb2R1Y3QtbmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSwyREFBb0U7QUFFN0QsTUFBTSxpQkFBaUIsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNuRSxJQUFJO1FBQ0EsTUFBTSxjQUFjLEdBQUcsTUFBTSx1Q0FBd0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxjQUFjLEVBQUU7WUFDaEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMvQzthQUNJO1lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQ2xEO0tBQ0o7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFDO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFaWSxRQUFBLGlCQUFpQixxQkFZN0IifQ==