import mongoose from 'mongoose'

const Products = new mongoose.Schema({
  img: { type: String },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: String, required: true },
  weight: { type: String, required: true },
  popular: { type: Boolean, default: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories' },
})

export default mongoose.model('Products', Products)
