import Order from '../model/Order.js'
import Products from '../model/Products.js'
import MailService from '../services/mail.service.js'

class OrdersService {
	async create(order) {
		const productOrder = JSON.parse(order.product)
		let stringProduct = ''
		let summ = 0

		for (let i = 0; i < productOrder.length; i++) {
			const productId = productOrder[i].id
			const productQtx = productOrder[i].qtx
			const product = await Products.findById(productId)

			stringProduct += `${product.title}: ${productQtx}; `

			summ += Number(product.price) * productQtx
		}

		const createOrder = await Order.create({
			...order,
			sum: summ,
			product: stringProduct,
		})

		await MailService.sendOrder(
			{
				...order,
				sum: summ,
				product: stringProduct,
			},
			createOrder._id
		)
		return createOrder
	}

	async getAll() {
		const orders = await Order.find()
		return orders
	}
}

export default new OrdersService()
