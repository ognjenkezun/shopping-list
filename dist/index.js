"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = require("./database/connect");
const routes_1 = __importDefault(require("./routes/routes"));
const port = process.env.APP_PORT || 3200;
const host = process.env.APP_HOST || "localhost";
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(port, () => {
    console.log(`App listening at http://${host}:${port}`);
    connect_1.connect();
    routes_1.default(app);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBK0M7QUFDL0MsZ0RBQTZDO0FBQzdDLDZEQUFxQztBQUVyQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7QUFDMUMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDO0FBRWpELE1BQU0sR0FBRyxHQUFnQixpQkFBTyxFQUFFLENBQUM7QUFFbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELGlCQUFPLEVBQUUsQ0FBQztJQUNWLGdCQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDLENBQUMifQ==