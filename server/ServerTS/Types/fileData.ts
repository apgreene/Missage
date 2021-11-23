export default interface fileData extends Request {
  files: {
    audio: {
      name: string
      data: Buffer
      size: number
      encoding: string
      tempFilePath: string
      truncated: false
      mimetype: string
      md5: string
      mv: any
    } 
  }
}