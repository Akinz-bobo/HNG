"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const requirement_1 = __importDefault(require("./routes/requirement"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use('/api', requirement_1.default);
app.use((err, req, res, next) => {
    res.status(5000).json({ message: err.message });
});
app.listen(5000, () => console.log("listening on port:" + 5000));
