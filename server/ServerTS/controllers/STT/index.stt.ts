import { SpeechClient } from '@google-cloud/speech';
import fs from 'fs';
import path from 'path';
// var __dirname = path.resolve();
interface TheObject {
  transcript: string
  timestamp: {}[]
}

interface ResponseObject {
results: [],
totalBilledTime: {}

}

export default async (input: string) => {
  const timestamp = false;
  const keyFilename = './ServerJS/controllers/STT/missage-38c481f53476.json';
  const client = new SpeechClient({ keyFilename });
  // @ts-ignore
  let filename = path.resolve(path.resolve(), `../server/uploads/${input}`);

  // server/ServerJS/controllers/STT/missage-38c481f53476.json


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
  const [response] : any[] = await operation.promise();
  // const [response] = await operation.promise();


  const sttOutput: TheObject = {
    transcript: '',
    timestamp: [],
  };

  

  response.results.forEach((result: any | undefined ) => {

    const value: { word: string, start: string }  = {word: '', start: '' };
    
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
        value.word = wordInfo.word
        value.start = startSecs
        
        sttOutput.timestamp.push(value)
      });
    }
  });

  return sttOutput.transcript;
};
