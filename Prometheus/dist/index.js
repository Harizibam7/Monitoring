"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
function middleware(req, res, next) {
    const startTime = Date.now();
    next();
    const endTime = Date.now();
    console.log(`Request took ${endTime - startTime} ms`);
}
app.use(express_1.default.json());
app.use(middleware);
app.get('/user', (req, res) => {
    res.send({
        name: "John Doe",
        age: 25,
    });
});
app.post("/user", (req, res) => {
    const user = req.body;
    res.send(Object.assign(Object.assign({}, user), { id: 1 }));
});
app.listen(3000, () => {
    console.log("Server is running in port 3000");
});
