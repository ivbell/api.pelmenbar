import mongoose from 'mongoose'

const GetPelmenbar = new mongoose.Schema({
	phone: { type: String, required: true },
	dateCreate: { type: Date, default: Date.now },
})

export default mongoose.model('GetPelmenbar', GetPelmenbar)
