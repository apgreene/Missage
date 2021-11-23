"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const note_controller_1 = __importDefault(require("./controllers/note.controller"));
const router = express_1.default.Router();
// @ts-ignore
router.post('/note', note_controller_1.default.postNote);
router.get('/note', note_controller_1.default.getAll);
router.get('/note/:id', note_controller_1.default.getNote);
router.delete('/note/:id', note_controller_1.default.deleteNote);
router.delete('/note', note_controller_1.default.deleteAll);
router.put('/note/:id', note_controller_1.default.updateNote);
exports.default = router;
