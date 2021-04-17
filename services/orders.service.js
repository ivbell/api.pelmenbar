import Order from '../model/Order.js'

class OrdersService {
  async create(order) {
    const createOrder = await Order.create(order)
    return createOrder
  }
}

export default new OrdersService()