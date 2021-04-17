import OrderService from '../services/orders.service.js'

class OrdersController {
  async create(req, res) {
    try {
      const order = await OrderService.create(req.body)
      return res.json({status: true, order})
    } catch (e) {
      return res.status(400).json(e.message)
    }
  }
}

export default new OrdersController()