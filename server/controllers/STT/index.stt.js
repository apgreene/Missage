import { SpeechClient } from '@google-cloud/speech';
import fs from 'fs';

export default async (input) => {
  const timestamp = false;
  const keyFilename = 'controllers/STT/missage-38c481f53476.json';
  const client = new SpeechClient({ keyFilename });
  let filename = `/Users/louiscappell/Desktop/codeworks/legacy/Missage/server/uploads/${input}`;


  const languageCode = 'en-US';

  const config = {
    enableWordTimeOffsets: true,
    languageCode: languageCode,
    // alternativeLanguageCodes: [languageCode, 'ko-KR'],
  };

  const audio = {
    content: fs.readFileSync(`${filename}`).toString('base64'),
  };

  const request = {
    config: config,
    audio: audio,
  };

  const [operation] = await client.longRunningRecognize(request);
  const [response] = await operation.promise();

  const sttOutput = {
    transcript: '',
    timestamp: [],
  };

  response.results.forEach((result) => {
    sttOutput.transcript += result.alternatives[0].transcript;
    if (timestamp) {
      result.alternatives[0].words.forEach((wordInfo) => {
        const startSecs =
          `${wordInfo.startTime.seconds}` +
          '.' +
          wordInfo.startTime.nanos / 100000000;
        const endSecs =
          `${wordInfo.endTime.seconds}` +
          '.' +
          wordInfo.endTime.nanos / 100000000;
        console.log(`Word: ${wordInfo.word}`);
        console.log(`\t ${startSecs} secs - ${endSecs} secs`);
        sttOutput.timestamp.push({ word: wordInfo.word, start: startSecs });
      });
    }
  });

  return sttOutput.transcript;
};
