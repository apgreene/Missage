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
const note_model_1 = __importDefault(require("../models/note.model"));
const index_stt_1 = __importDefault(require("./STT/index.stt"));
const fs_1 = __importDefault(require("fs"));
const postNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req);
        const audioFile = req.files.audio;
        const userID = req.body.userID;
        const audio = req.files.audio;
        audioFile.mv(`uploads/test.wav`, () => __awaiter(void 0, void 0, void 0, function* () {
            const text = yield (0, index_stt_1.default)(`test.wav`);
            const newNote = yield note_model_1.default.create({ audio, text, userID });
            audioFile.mv(`uploads/${newNote._id}.wav`);
            res.send(newNote);
            res.status(201);
            fs_1.default.unlink(`uploads/test.wav`, () => { });
        }));
    }
    catch (error) {
        console.error(error);
        res.status(500);
    }
});
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield note_model_1.default.find();
        res.send(notes);
    }
    catch (error) {
        console.error(error);
        res.status(500);
    }
});
const getNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const note = yield note_model_1.default.findOne({
            _id: id,
        });
        res.send(note);
    }
    catch (error) {
        console.error(error);
        res.status(500);
    }
});
const deleteAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield note_model_1.default.deleteMany();
        res.sendStatus(204);
    }
    catch (error) {
        console.error(error);
        res.status(500);
    }
});
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield note_model_1.default.deleteOne({
            _id: id,
        });
        fs_1.default.unlink(`uploads/${id}.wav`, () => { });
        res.sendStatus(204);
    }
    catch (error) {
        console.error(error);
        res.status(500);
    }
});
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { text, icon, title } = req.body;
        let note;
        if (text) {
            note = yield note_model_1.default.findByIdAndUpdate({ _id: id }, { text: text }, { new: true });
            res.status(201);
            res.send(note);
        }
        if (title) {
            note = yield note_model_1.default.findByIdAndUpdate({ _id: id }, { title: title }, { new: true });
            res.status(201);
            res.send(note);
        }
        if (icon) {
            note = yield note_model_1.default.findByIdAndUpdate({ _id: id }, { icon: icon }, { new: true });
            res.status(201);
            res.send(note);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500);
    }
});
exports.default = {
    postNote,
    getNote,
    deleteNote,
    updateNote,
    getAll,
    deleteAll,
};
