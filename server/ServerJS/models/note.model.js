"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { model, Schema } = mongoose_1.default;
const noteSchema = new Schema({
    title: { type: String, default: 'Untitled' },
    icon: { type: String, default: '📜' },
    audio: {
        type: Object,
        required: true,
    },
    text: { type: String, default: 'empty' },
    createdAt: { type: Date, default: Date.now },
    userID: { type: String, default: 'Anonymous' },
    lastModified: { type: Date, default: null },
});
const Model = model('Note', noteSchema);
exports.default = Model;
