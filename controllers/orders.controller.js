import Order from '../model/Order.js'

class OrdersController {
  async create(req, res) {
    try {
      const {product, delivery, phone, name, adress, sum} = req.body
      const order = await Order.create({
        product, delivery, phone, name, adress, sum,
      })
      res.json({status: true, order})
    } catch (e) {
      res.status(400).json(e)
    }
  }
}

export default new OrdersController()