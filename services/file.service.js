import * as uuid from 'uuid'
import path from 'path'

class FileService {
  saveJPG(file, name) {
    try {
      const newName = name + uuid.v4()
      const fileName = newName + '.jpg'
      const filePath = path.resolve('static/images', fileName)
      file.mv(filePath)
      return fileName
    } catch (e) {
      console.log(e)
    }
  }
}

export default new FileService()