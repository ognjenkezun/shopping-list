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
exports.updateUserService = exports.loginUserService = exports.createUserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../database/models/user"));
const jwt_1 = require("../middlewares/jwt");
const createUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_1.default.create(user);
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createUserService = createUserService;
const loginUserService = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loggedUser = yield user_1.default.findOne({ email });
        if (loggedUser) {
            const isValid = yield bcrypt_1.default.compare(password, loggedUser.password);
            if (isValid) {
                return new jwt_1.JWT().sign({ id: loggedUser.id, email: loggedUser.email });
            }
            throw new Error("Password is not correct");
        }
        return "";
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.loginUserService = loginUserService;
const updateUserService = (user, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salt = yield bcrypt_1.default.genSalt(16);
        const hash = yield bcrypt_1.default.hashSync(password, salt);
        password = hash;
        const userFound = yield user_1.default.findOneAndUpdate({ email }, { password }, { new: true }, (err, doc) => {
            if (err) {
                throw new Error("Something wrong when updating data!");
            }
        });
        if (userFound) {
            if (user.id === userFound.id) {
                return userFound;
            }
            throw new Error("You can only modify your profile");
        }
        throw new Error("User not found");
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.updateUserService = updateUserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG9EQUE0QjtBQUM1QixtRUFBNkQ7QUFDN0QsNENBQXlDO0FBRWxDLE1BQU0saUJBQWlCLEdBQUcsQ0FBTyxJQUFzQyxFQUFFLEVBQUU7SUFDOUUsSUFBSTtRQUNBLE9BQU8sTUFBTSxjQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDWixNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFOWSxRQUFBLGlCQUFpQixxQkFNN0I7QUFFTSxNQUFNLGdCQUFnQixHQUFHLENBQU8sS0FBYSxFQUFFLFFBQWdCLEVBQUUsRUFBRTtJQUN0RSxJQUFJO1FBQ0EsTUFBTSxVQUFVLEdBQUcsTUFBTSxjQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUVqRCxJQUFJLFVBQVUsRUFBRTtZQUNaLE1BQU0sT0FBTyxHQUFHLE1BQU0sZ0JBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRSxJQUFJLE9BQU8sRUFBRTtnQkFDVCxPQUFPLElBQUksU0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ3pFO1lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBaEJZLFFBQUEsZ0JBQWdCLG9CQWdCNUI7QUFFTSxNQUFNLGlCQUFpQixHQUFHLENBQU8sSUFBc0MsRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO0lBQy9HLElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLGdCQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sSUFBSSxHQUFHLE1BQU0sZ0JBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRW5ELFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsTUFBTSxTQUFTLEdBQUcsTUFBTSxjQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzdGLElBQUksR0FBRyxFQUFFO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQzthQUMxRDtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsT0FBTyxTQUFTLENBQUM7YUFDcEI7WUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDdkQ7UUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDckM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUI7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQXhCWSxRQUFBLGlCQUFpQixxQkF3QjdCIn0=