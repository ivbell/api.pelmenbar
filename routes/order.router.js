import Router from 'express'
import OrdersController from '../controllers/orders.controller.js'

const OrderRouter = new Router

OrderRouter.post('/orders', OrdersController.create)

export default OrderRouter