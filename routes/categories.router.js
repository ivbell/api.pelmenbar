import Router from 'express'
import CategoriesController from '../controllers/categories.controller.js'

const CategoriesRouter = new Router()

CategoriesRouter.post('/categories', CategoriesController.create)
CategoriesRouter.get('/categories', CategoriesController.getAll)
CategoriesRouter.get('/categories/:id', CategoriesController.getOne)
CategoriesRouter.put('/categories', CategoriesController.update)
CategoriesRouter.delete('/categories/:id', CategoriesController.delete)

export default CategoriesRouter
