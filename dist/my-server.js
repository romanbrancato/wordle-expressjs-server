"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5173; // Allow dynamic PORT setting (Heroku)
// Array of 5-letter words
const words = ["APPLE", "BEACH", "CHAIR", "DANCE", "FLUFF", "CANNY", "SPOON", "DOLLY"];
// Define GET endpoint to return random word
app.get("/", (req, res) => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const secretWord = words[randomIndex];
    res.send({ secret: secretWord });
});
app.listen(PORT, () => {
});
