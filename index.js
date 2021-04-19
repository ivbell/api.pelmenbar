import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import CategoriesRouter from './routes/categories.router.js'
import ProductsRouter from './routes/product.router.js'
import OrderRouter from './routes/order.router.js'

const URL_DB =
  'mongodb+srv://admin:admin@cluster0.jb6zy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next()
})
app.use(express.json()) //добавляем чтение json
app.use(express.static('static'))
app.use(fileUpload({}))
//Routes
app.use('/api', CategoriesRouter)
app.use('/api', ProductsRouter)
app.use('/api', OrderRouter)


async function startApp() {
  try {
    await mongoose.connect(URL_DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    app.listen(PORT, () => console.log('App has been started, port: ' + PORT))
  } catch (error) {
    console.log(error)
  }
}

startApp()
