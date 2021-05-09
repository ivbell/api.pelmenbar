import jsFtp from 'jsftp'

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
      const ftp = new jsFtp({
        host: 'pelmenbar5.beget.tech',
        port: 21,
        user: 'pelmenbar5_cdn',
        pass: '4UGToIG*',
      })

      const fileName = name + '.jpg'

      ftp.put(file.data, `images/${fileName}`, (err) => {
        if (err) {
          return console.log(err)
        }
      })

      return fileName
    } catch (e) {
      console.log(e)
    }
  }
}

export default new FileService()
