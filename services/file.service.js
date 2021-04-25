import path from 'path'
import jsftp from 'jsftp'

class FileService {
  // saveJPG(file, name) {
  //   try {
  //     const fileName = name + '.jpg'
  //     const filePath = path.resolve('static/images', fileName)
  //     file.mv(filePath)
  //     return fileName
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  saveJPG(file, name) {
    try {
      const ftp = new jsftp({
        host: 'pelmenbar5.beget.tech',
        port: 21,
        user: 'pelmenbar5_cdn',
        pass: '4UGToIG*',
      })

      const fileName = name + '.jpg'
      const filePath = path.resolve('static/images', fileName)
      file.mv(filePath)
      console.log(file)
      console.log(fileName)

      ftp.put(file.data, `images/${fileName}`, (err) => {
        if (err) {
          return console.log(err)
        }
        console.log('File copied successfully!')
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export default new FileService()
