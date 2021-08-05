"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseHelper = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class MongooseHelper {
}
exports.MongooseHelper = MongooseHelper;
MongooseHelper.getIdObjectFromString = (str) => {
    return mongoose_1.default.Types.ObjectId(str);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9tb25nb29zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3REFBZ0M7QUFFaEMsTUFBYSxjQUFjOztBQUEzQix3Q0FJQztBQUhVLG9DQUFxQixHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7SUFDM0MsT0FBTyxrQkFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFBIn0=