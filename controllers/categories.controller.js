import Categories from '../model/Categories.js'
import CategoriesService from '../services/categories.service.js'

class CategoriesController {
  async create(req, res) {
    try {
      const categories = await CategoriesService.create(req.body)
      return res.json({status: true, categories})
    } catch (e) {
      return res.status(400).json(e.message)
    }
  }

  async getAll(req, res) {
    try {
      const categories = await CategoriesService.getAll()
      return res.json(categories)
    } catch (e) {
      return res.status(400).json(e.message)
    }
  }

  async getOne(req, res) {
    try {
      const category = await CategoriesService.getOne(req.params.id)
      return res.json(category)
    } catch (e) {
      return res.status(400).json(e.message)
    }
  }

  async update(req, res) {
    try {
      const updatedCategory = await CategoriesService.update(req.body)
      return res.json({status: true, updatedCategory})
    } catch (e) {
      return res.status(400).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const category = await Categories.findByIdAndDelete(req.params.id)
      return res.json({status: true, category})
    } catch (e) {
      return res.status(400).json(e.message)
    }
  }
}

export default new CategoriesController()