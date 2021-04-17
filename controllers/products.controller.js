import ProductService from '../services/product.service.js'

class ProductsController {
  async create(req, res) {
    try {
      const product = await ProductService.create(req.body, req.files.img)
      res.json({status: true, product})
    } catch (e) {
      res.status(400).json(e.message)
    }
  }

  async getAll(req, res) {
    try {
      const products = await ProductService.getAll()
      return res.json(products)
    } catch (e) {
      return res.status(400).json(e.message)
    }
  }

  async getOne(req, res) {
    try {
      const product = await ProductService.getOne(req.params.id)
      return res.json(product)
    } catch (e) {
      return res.status(400).json(e.message)
    }
  }

  async update(req, res) {
    try {
      const updateProduct = await ProductService.update(req.body)
      return res.json({status: true, updateProduct})
    } catch (e) {
      return res.status(400).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const product = await ProductService.delete(req.params.id)
      return res.json({status: true, product})
    } catch (e) {
      return res.status(400).json(e.message)
    }
  }
}

export default new ProductsController()