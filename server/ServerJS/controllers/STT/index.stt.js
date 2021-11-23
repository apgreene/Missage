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
const speech_1 = require("@google-cloud/speech");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.default = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const timestamp = false;
    const keyFilename = './ServerJS/controllers/STT/missage-38c481f53476.json';
    const client = new speech_1.SpeechClient({ keyFilename });
    // @ts-ignore
    let filename = path_1.default.resolve(path_1.default.resolve(), `../server/uploads/${input}`);
    // server/ServerJS/controllers/STT/missage-38c481f53476.json
    const languageCode = 'en-US';
    const config = {
        enableWordTimeOffsets: true,
        languageCode: languageCode,
        // alternativeLanguageCodes: [languageCode, 'ko-KR'],
    };
    const audio = {
        content: fs_1.default.readFileSync(`${filename}`).toString('base64'),
    };
    const request = {
        config: config,
        audio: audio,
    };
    const [operation] = yield client.longRunningRecognize(request);
    const [response] = yield operation.promise();
    // const [response] = await operation.promise();
    const sttOutput = {
        transcript: '',
        timestamp: [],
    };
    response.results.forEach((result) => {
        const value = { word: '', start: '' };
        sttOutput.transcript += result.alternatives[0].transcript;
        if (timestamp) {
            result.alternatives[0].words.forEach((wordInfo) => {
                const startSecs = `${wordInfo.startTime.seconds}` +
                    '.' +
                    wordInfo.startTime.nanos / 100000000;
                const endSecs = `${wordInfo.endTime.seconds}` +
                    '.' +
                    wordInfo.endTime.nanos / 100000000;
                console.log(`Word: ${wordInfo.word}`);
                console.log(`\t ${startSecs} secs - ${endSecs} secs`);
                value.word = wordInfo.word;
                value.start = startSecs;
                sttOutput.timestamp.push(value);
            });
        }
    });
    return sttOutput.transcript;
});
