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
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });
UserSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = this;
        if (!user.isModified("password"))
            return next();
        const salt = yield bcrypt_1.default.genSalt(16);
        const hash = yield bcrypt_1.default.hash(user.password, salt);
        user.password = hash;
        return next();
    });
});
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFnQztBQUNoQyxvREFBNEI7QUFXNUIsTUFBTSxVQUFVLEdBQUcsSUFBSSxrQkFBUSxDQUFDLE1BQU0sQ0FDbEM7SUFDSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtJQUNyRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDN0MsRUFDRCxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FDdkIsQ0FBQztBQUVGLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQWdCLElBQStCOztRQUNsRSxJQUFJLElBQUksR0FBRyxJQUFvQixDQUFDO1FBRWhDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztZQUM1QixPQUFPLElBQUksRUFBRSxDQUFDO1FBRWxCLE1BQU0sSUFBSSxHQUFHLE1BQU0sZ0JBQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXJCLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILE1BQU0sSUFBSSxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFlLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUU5RCxrQkFBZSxJQUFJLENBQUMifQ==