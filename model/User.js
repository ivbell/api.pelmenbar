import mongoose from 'mongoose'

const User = mongoose.Schema({
	login: { type: String, required: true, unique: true },
	password: { type: String, required: true, minLength: 6 },
	name: { type: String },
	role: { type: String, default: 'user' },
})

export default mongoose.model('User', User)
