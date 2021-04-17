import mongoose from 'mongoose'

const User = mongoose.Schema({
  login: {type: String, unique: true},
  password: {type: String, minLength: 6},
  name: {type: String},
  role: {type: String, default: 'user'}
})