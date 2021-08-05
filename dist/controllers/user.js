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
exports.updateUser = exports.loginUser = exports.createUser = void 0;
const lodash_1 = require("lodash");
const user_1 = require("../services/user");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.createUserService(req.body);
        return res.status(201).send(lodash_1.omit(user.toJSON(), "password"));
    }
    catch (e) {
        return res.status(409).send(e.message);
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email || !req.body.password) {
        throw new Error('Please provide complete details');
    }
    const { password, email } = req.body;
    try {
        const token = yield user_1.loginUserService(email, password);
        if (token) {
            return res.status(200).json({ token });
        }
        throw new Error('Pasword or email is not correct');
    }
    catch (error) {
        throw new Error('Error 400');
    }
});
exports.loginUser = loginUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield user_1.updateUserService(req.body.user, email, password);
        return res.status(200).send(lodash_1.omit(user.toJSON(), "password"));
    }
    catch (e) {
        return res.status(409).send(e.message);
    }
});
exports.updateUser = updateUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLG1DQUE4QjtBQUM5QiwyQ0FFb0Q7QUFFN0MsTUFBTSxVQUFVLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDNUQsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLE1BQU0sd0JBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0tBQ2hFO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQztBQUNMLENBQUMsQ0FBQSxDQUFBO0FBUFksUUFBQSxVQUFVLGNBT3RCO0FBRU0sTUFBTSxTQUFTLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFM0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0tBQ3REO0lBRUQsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBRXJDLElBQUk7UUFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLHVCQUFnQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RCxJQUFJLEtBQUssRUFBRTtZQUNQLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0tBQ3REO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDWixNQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ2hDO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFsQlksUUFBQSxTQUFTLGFBa0JyQjtBQUVNLE1BQU0sVUFBVSxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzVELElBQUk7UUFDQSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDckMsTUFBTSxJQUFJLEdBQUcsTUFBTSx3QkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7S0FDaEU7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFDO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFSWSxRQUFBLFVBQVUsY0FRdEIifQ==