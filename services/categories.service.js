import Categories from '../model/Categories.js'

class CategoriesService {
  async create(category) {
    const categories = await Categories.create(category)
    return categories
  }

  async getAll() {
    const categories = await Categories.find()
    return categories
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID не указан')
    }
    const category = await Categories.findById(id)
    return category
  }

  async update(category) {
    if (!category._id) {
      throw new Error('ID не указан')
    }
    const updatedCategory = await Categories.findByIdAndUpdate(category._id, category, {new: true})
    return updatedCategory
  }

  async delete(id) {
    if (!id) {
      throw new Error('ID не указан')
    }
    const category = await Categories.findByIdAndDelete(id)

    if (category === null) {
      throw new Error('Категории не существует')
    }

    return category
  }
}

export default new CategoriesService()