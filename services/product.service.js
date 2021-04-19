import config from 'config'
import Products from '../model/Products.js'
import FileService from '../services/file.service.js'

const URL = config.get('BASE_URL')

class ProductService {
  async create(product, picture) {
    const fileName = FileService.saveJPG(picture, product.title)
    const createdProduct = await Products.create({...product, img: URL + '/images/' + fileName})
    return createdProduct
  }

  async getAll() {
    const products = await Products.find()
    return products
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID не указан')
    }
    const product = await Products.findById(id)
    return product
  }

  async updateFile(product, picture) {
    if (!product._id) {
      throw new Error('ID продукта не указан')
    }
    const fileName = FileService.saveJPG(picture, product.title)
    const updateProduct = await Products.findByIdAndUpdate(product._id, {
      ...product,
      img: URL + '/images/' + fileName,
    }, {new: true})
    return updateProduct
    // if (picture){
    //
    // }else{
    //   const updateProduct = await Products.findByIdAndUpdate(product._id, product, {new: true})
    //   return updateProduct
    // }
  }

  async update(product) {
    if (!product._id) {
      throw new Error('ID продукта не указан')
    }
    const updateProduct = await Products.findByIdAndUpdate(product._id, product, {new: true})
    return updateProduct
  }

  async delete(id) {
    if (!id) {
      throw new Error('ID не указан')
    }
    const product = await Products.findByIdAndDelete(id)

    if (product === null) {
      throw new Error('Продукт не найден')
    }

    return product

  }
}

export default new ProductService()