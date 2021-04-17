import Order from '../model/Order.js'
import MailService from '../services/mail.service.js'

class OrdersService {
  async create(order) {
    const createOrder = await Order.create(order)
    await MailService.sendOrder(order, createOrder._id)
    return createOrder
  }
}

export default new OrdersService()