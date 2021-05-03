import mongoose from 'mongoose'

const Order = new mongoose.Schema({
	product: { type: String, required: true },
	delivery: { type: String, required: true },
	phone: { type: String, required: true },
	name: { type: String, required: true },
	adress: { type: String, required: true },
	sum: { type: String, required: true },
	payment: { type: String, required: true },
	status: { type: Boolean, default: false },
	onDelete: { type: Boolean, default: false },
	date: { type: Date, default: Date.now },
})

export default mongoose.model('Order', Order)
