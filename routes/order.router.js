import Router from 'express'
import OrdersController from '../controllers/orders.controller.js'

const OrderRouter = new Router

OrderRouter.post('/orders', OrdersController.create)
OrderRouter.get('/orders', OrdersController.getAll)

export default OrderRouter