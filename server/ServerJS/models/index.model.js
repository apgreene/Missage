"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost/notes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose_1.default.connection;
db.on('error', () => {
    console.error('DB connection error');
});
db.once('open', () => {
    console.log('DB connected successfully🥳');
});
exports.default = db;
