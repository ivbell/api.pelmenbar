import Router from 'express'
import ProductsController from '../controllers/products.controller.js'

const ProductsRouter = new Router()

ProductsRouter.post('/products', ProductsController.create)
ProductsRouter.get('/products', ProductsController.getAll)
ProductsRouter.get('/products/:id', ProductsController.getOne)
ProductsRouter.put('/products/', ProductsController.update)
ProductsRouter.delete('/products/:id', ProductsController.delete)


export default ProductsRouter
