"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JWT {
    constructor() {
        this.secret = process.env.SECRET || "ps120fadrn58d9aw";
        this.sign = (data) => {
            try {
                return jsonwebtoken_1.default.sign(data, this.secret);
            }
            catch (error) {
                throw new Error("Error in sign");
            }
        };
        this.authenticate = (req, res, next) => {
            var _a, _b;
            try {
                const token = (_b = (_a = req.headers.jwt) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
                if (!token) {
                    res.status(401).json({ statusCode: 401, message: "Unauthorized" });
                }
                const isValid = jsonwebtoken_1.default.verify(token, this.secret);
                if (isValid) {
                    const user = jsonwebtoken_1.default.decode(token);
                    req.body.user = user;
                    next();
                }
                else {
                    res.status(401).json({ statusCode: 400, message: "Token is invalid" });
                }
            }
            catch (error) {
                throw new Error("Error in authentication");
            }
        };
    }
}
exports.JWT = JWT;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmVzL2p3dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnRUFBb0M7QUFHcEMsTUFBYSxHQUFHO0lBQWhCO1FBRVksV0FBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLGtCQUFrQixDQUFDO1FBRW5ELFNBQUksR0FBRyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQ3hCLElBQUk7Z0JBQ0EsT0FBTyxzQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzNDO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNwQztRQUNMLENBQUMsQ0FBQTtRQUVNLGlCQUFZLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTs7WUFDdEUsSUFBSTtnQkFDQSxNQUFNLEtBQUssR0FBVyxNQUFBLE1BQUEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLDBDQUFFLFFBQVEsRUFBRSxtQ0FBSSxFQUFFLENBQUM7Z0JBRXhELElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RTtnQkFFRCxNQUFNLE9BQU8sR0FBRyxzQkFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVwRCxJQUFHLE9BQU8sRUFBRTtvQkFDUixNQUFNLElBQUksR0FBRyxzQkFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNyQixJQUFJLEVBQUUsQ0FBQztpQkFDVjtxQkFDSTtvQkFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztpQkFDMUU7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUM5QztRQUNMLENBQUMsQ0FBQTtJQUNMLENBQUM7Q0FBQTtBQWxDRCxrQkFrQ0MifQ==